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
await page.waitForFunction(() => window.klar === true);
await page.waitForTimeout(2500);
await page.screenshot({ path: path.join(UD, '2-start.png') });
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
await page.evaluate(() => window.spil.simuler(8));
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

// Oversigt over hele øen
await page.evaluate(() => { const r = window.spil.rig; r.følger = false; r.fokus.set(0, 0, 2); r.afstand = 62; });
await page.waitForTimeout(1500);
await page.screenshot({ path: path.join(UD, '5-oversigt.png') });

console.log(fejl.length ? `FEJL:\n${fejl.join('\n')}` : 'Ingen fejl i konsollen');
await browser.close();
server.close();
process.exit(fejl.length ? 1 : 0);
