// Røgtest: bygger spillet, åbner det i headless Chromium i mobilstørrelse,
// vælger essens, går hen og angriber et skelet og tager skærmbilleder.
//   node tools/smoke-test.mjs [--no-build]
import { chromium } from 'playwright-core';
import { execSync } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROD = path.resolve(import.meta.dirname, '..');
const DIST = path.join(ROD, process.env.DIST ?? 'dist');
const UD = path.join(ROD, 'test-output', process.env.NAVN ?? 'mobil');
fs.mkdirSync(UD, { recursive: true });
if (!process.argv.includes('--no-build')) execSync('npx vite build', { cwd: ROD, stdio: 'inherit' });

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.glb': 'model/gltf-binary', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  const p = path.join(DIST, decodeURIComponent(req.url.split('?')[0]).replace(/\/$/, '/index.html'));
  if (!p.startsWith(DIST) || !fs.existsSync(p)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': MIME[path.extname(p)] ?? 'application/octet-stream' });
  fs.createReadStream(p).pipe(res);
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const url = `http://127.0.0.1:${server.address().port}/`;

const exe = process.env.CHROMIUM_PATH ?? '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const browser = await chromium.launch({ executablePath: exe, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const bredde = +(process.env.W ?? 390), højde = +(process.env.H ?? 844);
const page = await browser.newPage({ viewport: { width: bredde, height: højde }, hasTouch: true, isMobile: true });
const fejl = [];
page.on('pageerror', (e) => fejl.push(e.message));
// Google Fonts kan ikke nås fra testmiljøet — det er ikke en fejl i spillet
page.on('console', (m) => { if (m.type() === 'error' && !/TUNNEL|fonts\.g/.test(m.text())) fejl.push(m.text()); });
page.on('requestfailed', (r) => { if (!r.url().includes('fonts.g')) fejl.push(`Kunne ikke hente ${r.url()}`); });

await page.goto(url);
await page.waitForSelector('#essensvalg.vis', { timeout: 90000 });
await page.screenshot({ path: path.join(UD, '1-essens.png') });
await page.click('.essens.vold');
await page.click('#essens-start');
await page.waitForFunction(() => window.klar === true);
await page.waitForTimeout(2500);
await page.screenshot({ path: path.join(UD, '2-start.png') });

// M3: arbejderne høster; vælg en, byg en hytte, træn en ny arbejder
const før = await page.evaluate(() => { const ø = window.spil.økonomi; return { guld: ø.guld, træ: ø.træ, sten: ø.sten }; });
await page.evaluate(() => window.spil.simuler(40));
const m3 = await page.evaluate(() => {
  const s = window.spil, ø = s.økonomi, b = s.base;
  const efter = { guld: ø.guld, træ: ø.træ, sten: ø.sten };
  const a = b.arbejdere[0];
  s.valg.vælg(a);
  // Find et frit felt to skridt fra Storlejren
  const lejr = b.bygninger[0];
  const felt = [...s.verden.kort.felter.values()].find((f) => !b.kanPlacere('hytte', f) && Math.hypot(s.hexTilVerden(f.q, f.r).x - lejr.x, s.hexTilVerden(f.q, f.r).z - lejr.z) < 26);
  s.valg.startPlacering('hytte');
  s.valg.vælgFelt(felt);
  const fejl = s.valg.bekræftPlacering();
  const forsyningFør = ø.forsyningMaks;
  s.simuler(45);
  const hytte = b.bygninger[1];
  const træn = lejr.træn('arbejder');
  s.simuler(14);
  return { efter, fejl, hytteFærdig: hytte?.færdig, forsyning: `${forsyningFør} -> ${ø.forsyningMaks}`, træn, arbejdere: b.arbejdere.length, tilstande: b.arbejdere.map((x) => x.tilstand).join(',') };
});
console.log('M3 før', før, 'efter', m3);
await page.evaluate(() => { const s = window.spil; s.valg.vælg(s.base.arbejdere[1]); s.rig.følger = false; const l = s.base.bygninger[0]; s.rig.fokus.set(l.x, 0, l.z + 6); s.rig.afstand = 40; });
await page.waitForTimeout(1500);
await page.screenshot({ path: path.join(UD, '2c-base.png') });
await page.evaluate(() => { const s = window.spil; s.valg.vælg(s.base.bygninger[0]); });
await page.waitForTimeout(600);
await page.screenshot({ path: path.join(UD, '2d-storlejr.png') });
await page.evaluate(() => { const s = window.spil; s.valg.vælg(s.base.arbejdere[2]); s.valg.startPlacering('tårn'); const f = [...s.verden.kort.felter.values()].find((x) => !s.base.kanPlacere('tårn', x) && Math.hypot(s.hexTilVerden(x.q, x.r).x - s.rig.fokus.x, s.hexTilVerden(x.q, x.r).z - s.rig.fokus.z) < 20); s.valg.vælgFelt(f); });
await page.waitForTimeout(800);
await page.screenshot({ path: path.join(UD, '2e-placering.png') });
await page.evaluate(() => { const s = window.spil; s.valg.annullérPlacering(); s.valg.vælg(null); s.rig.centrér(); s.rig.afstand = 30; });

await page.evaluate(() => { window.spil.rig.afstand = 11; });
await page.waitForTimeout(1500);
await page.screenshot({ path: path.join(UD, '2b-helt.png') });
await page.evaluate(() => { window.spil.rig.afstand = 28; });

// Find nærmeste skelet og angrib det
const mål = await page.evaluate(() => {
  const { helt, verden } = window.spil;
  const c = verden.creeps.slice().sort((a, b) => helt.afstand(a) - helt.afstand(b))[0];
  helt.kommandoAngrib(c);
  return { navn: c.navn, afstand: helt.afstand(c).toFixed(1) };
});
console.log('Angriber', mål);
await page.evaluate(() => window.spil.simuler(22));
await page.waitForTimeout(800);
await page.screenshot({ path: path.join(UD, '3-kamp.png') });
const status = await page.evaluate(() => {
  const { helt, verden } = window.spil;
  return { hp: Math.round(helt.hp), xp: helt.xp, level: helt.level, døde: verden.creeps.filter((c) => c.død).length };
});
console.log('Status', status);
await page.evaluate(() => { window.spil.simuler(1); window.spil.brugEvne(0); window.spil.simuler(0.5); });
await page.waitForTimeout(800);
await page.screenshot({ path: path.join(UD, '4-evne.png') });

// Items: læg nogle i inventaret og på jorden, vis info-kort og butik
const items = await page.evaluate(() => {
  const s = window.spil, inv = s.helt.inventar;
  ['livseliksir', 'jernsværd', 'lynstav', 'tordenøksen', 'magerensBog'].forEach((id) => inv.modtag(id));
  s.genstande.læg('kaptajnensKlinge', s.helt.x + 3, s.helt.z + 1);
  s.genstande.læg('guldpose', s.helt.x + 1, s.helt.z);
  s.rig.centrér(); s.simuler(0.5);
  return { guld: inv.guld, skade: inv.bonus.skade, pladser: inv.pladser.map((p) => p?.id ?? '-').join(',') };
});
console.log('Items', items);
await page.waitForTimeout(800);
await page.screenshot({ path: path.join(UD, '7-items.png') });
await page.evaluate(() => window.spil.invHud.visInfo(3));
await page.waitForTimeout(400);
await page.screenshot({ path: path.join(UD, '8-info.png') });
await page.evaluate(() => { const s = window.spil; s.invHud.lukInfo(); s.helt.inventar.guld = 400; s.invHud.åbnButik(s.steder.find((x) => x.type === 'marked') ?? { x: s.helt.x, z: s.helt.z }); });
await page.evaluate(() => { const s = window.spil; s.invHud.butikSted = { x: s.helt.x, z: s.helt.z }; });
await page.waitForTimeout(400);
await page.screenshot({ path: path.join(UD, '9-butik.png') });
await page.evaluate(() => window.spil.invHud.lukButik());

// Nærbillede: helten ved basens huse (tjek af størrelsesforhold)
await page.evaluate(() => {
  const s = window.spil, b = s.verden.kort.base, p = s.hexTilVerden(b.q - 2, b.r + 1);
  s.helt.rod.position.set(p.x + 4.2, 0, p.z + 3.2); s.helt.stop(); s.helt.mål = null;
  s.rig.følger = false; s.rig.fokus.set(p.x + 1, 0, p.z + 2); s.rig.afstand = 15;
});
await page.waitForTimeout(1500);
await page.screenshot({ path: path.join(UD, '6-hus.png') });

// Oversigt over hele øen
await page.evaluate(() => { window.spil.visHeleKortet(); window.spil.simuler(0.3); const r = window.spil.rig; r.følger = false; r.fokus.set(0, 0, 10); r.afstand = 260; r.kamera.far = 900; r.kamera.updateProjectionMatrix(); window.spil.verden.scene.fog = null; });
await page.waitForTimeout(3000);
await page.screenshot({ path: path.join(UD, '5-oversigt.png') });

console.log(fejl.length ? `FEJL:\n${fejl.join('\n')}` : 'Ingen fejl i konsollen');
await browser.close();
server.close();
process.exit(fejl.length ? 1 : 0);
