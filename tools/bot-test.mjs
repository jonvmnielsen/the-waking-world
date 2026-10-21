// Spil-bot: spiller et helt spil for hver race mod AI-modstanderen i headless Chromium og logger forløbet
// (økonomi, hær, helt, AI) hvert 5. minut. Finder fejl der kun opstår sent i et spil, og giver et groft
// billede af balancen. Bygger ikke selv — kør `npx vite build` først.
//   RACER=tide,arkitekter,dreaming node tools/bot-test.mjs
import { chromium } from 'playwright-core';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROD = path.resolve(import.meta.dirname, '..');
const DIST = path.join(ROD, 'dist');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.glb': 'model/gltf-binary', '.json': 'application/json' };
const server = http.createServer((req, res) => { const p = path.join(DIST, decodeURIComponent(req.url.split('?')[0]).replace(/\/$/, '/index.html')); if (!p.startsWith(DIST) || !fs.existsSync(p)) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'content-type': MIME[path.extname(p)] ?? 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const url = `http://127.0.0.1:${server.address().port}/`;
const b = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH ?? '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const fejl = [];
const RACER = (process.env.RACER ?? 'tide,arkitekter,dreaming').split(',');
for (const race of RACER) {
  const fj = { tide: 'dreaming', arkitekter: 'tide', dreaming: 'arkitekter' }[race];
  const page = await b.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  page.on('pageerror', e => fejl.push(race + ' PAGEERR ' + e.message + ' ' + (e.stack ?? '').split('\n').slice(1,3).join(' | ')));
  page.on('console', m => { if (m.type()==='error' && !/TUNNEL|fonts/.test(m.text())) fejl.push(race + ' CONSOLE ' + m.text()); });
  await page.goto(url + `?race=${race}&fjende=${fj}&kort=askeø&biom=tempereret&størrelse=normal`);
  await page.waitForSelector('#essensvalg.vis', { timeout: 120000 });
  await page.click('.essens.vold'); await page.click('#essens-start');
  await page.waitForSelector('#intro.vis', { timeout: 60000 }); await page.click('#intro-spring');
  await page.waitForFunction(() => window.klar === true); await page.waitForTimeout(1000);
  const log = await page.evaluate(async () => {
    const s = spil, b = s.base, ø = s.økonomi, H = s.helt, m = s.modstander, L = [];
    const plads = (type) => { const l = b.bygninger.find((x) => !x.død) ?? H; if (!s.hexTilVerden(0, 0)) throw new Error('hexTilVerden ' + typeof s.hexTilVerden); return [...s.verden.kort.felter.values()].filter((f) => !b.kanPlacere(type, f, 0)).map((f) => ({ f, d: Math.hypot(s.hexTilVerden(f.q, f.r).x - l.x, s.hexTilVerden(f.q, f.r).z - l.z) })).filter((x) => x.d > 14).sort((a, c) => a.d - c.d)[0]?.f; };
    const byg = (type) => { const f = plads(type); if (!f) return false; const [x, fe] = b.placér(type, f, 0); if (fe) return false; const a = b.arbejdere.filter((w) => !w.død).sort((p, q) => Math.hypot(p.x - x.x, p.z - x.z) - Math.hypot(q.x - x.x, q.z - x.z))[0]; a?.kommandoByg(x); L.push(`${Math.round(s.ur.tid / 60)}m byg ${x.data.navn}`); return true; };
    const plan = ['hytte', 'krigerlejr', 'alter', 'hytte', 'tårn', 'hytte', 'smedje', 'krigerlejr', 'hytte'];
    let næste = 0, angreb = false, idle = 0, maxIdle = 0;
    for (let t = 0; t < 26 * 60; t += 5) {
      s.simuler(5);
      if (s.slut) { L.push(`${Math.round(s.ur.tid / 60)}m SLUT: ${s.slut}`); break; }
      // arbejdere: ledige går i gang (2/3 guld, 1/3 træ)
      { const lev = b.arbejdere.filter((a) => !a.død && !a.bygning); const træ = lev.filter((a) => a.kilde?.type === 'træ').length;
        const sten = lev.filter((a) => a.kilde?.type === 'sten').length;
        for (const a of b.ledige) a.høstNærmeste(sten < lev.length * 0.15 ? 'sten' : træ < lev.length * 0.4 ? 'træ' : 'guld');
        if (træ < lev.length * 0.3) lev.find((a) => a.kilde?.type === 'guld')?.høstNærmeste('træ'); }
      idle = b.ledige.length; maxIdle = Math.max(maxIdle, idle);
      const hal = b.bygninger.find((x) => x.data.træner?.includes('arbejder') && x.færdig && !x.død);
      if (hal && !hal.kø.length && b.arbejdere.filter((a) => !a.død).length < 8) hal.træn('arbejder');
      if (næste < plan.length && byg(plan[næste])) næste++;
      for (const k of b.bygninger.filter((x) => x.færdig && !x.død && x.data.træner?.some((y) => y !== 'arbejder'))) if (k.kø.length < 2) k.træn(k.data.træner[(t / 5) % 2 ? 1 : 0]);
      // helten: alteret genopliver; ellers jager lette lejre
      if (H.død) { const a = b.bygninger.find((x) => x.data.alter && x.færdig && !x.død); if (a && !s.alter.genopliv) s.alter.start(a); }
      else if (H.hp < H.maxHp * 0.35 && !angreb) { const hj = b.bygninger.find((x) => !x.død) ?? H; if (Math.hypot(H.x - hj.x, H.z - hj.z) > 12) H.kommandoGå(hj.x + 6, hj.z + 6); }
      else if (!angreb && !H.mål && !H.bevæger && H.hp > H.maxHp * 0.75) {
        const lejr = s.lejre.filter((l) => l.creeps.some((c) => !c.død) && l.data.niveau <= (H.level < 4 ? 1 : H.level < 7 ? 2 : 3)).sort((p, q) => Math.hypot(p.x - H.x, p.z - H.z) - Math.hypot(q.x - H.x, q.z - H.z))[0];
        const c = lejr?.creeps.find((c) => !c.død); if (c) H.kommandoAngrib(c);
      }
      // forsvar: angriber fjenden basen, går hæren og helten efter den
      { const hj = b.bygninger.find((x) => !x.død); const ind = hj && m.levende.filter((e) => !e.død && Math.hypot(e.x - hj.x, e.z - hj.z) < 30)[0];
        if (ind && !angreb) { for (const u of b.hær) if (!u.mål) u.kommandoAngrib(ind); if (!H.død && !H.mål) H.kommandoAngrib(ind); } }
      // efter 14 min: hele hæren og helten angriber modstanderens bygninger
      if (s.ur.tid > 14 * 60) {
        const ref = b.bygninger.find((x) => !x.død) ?? H; const mål = m.bygninger.filter((x) => !x.død).sort((p, q) => Math.hypot(p.x - ref.x, p.z - ref.z) - Math.hypot(q.x - ref.x, q.z - ref.z))[0];
        if (mål && t % 30 === 0) { if (!angreb) L.push(`${Math.round(s.ur.tid / 60)}m ANGREB med ${b.hær.length} soldater, helt lv ${H.level}`); angreb = true; for (const u of b.hær) if (!u.mål) u.kommandoAngrib(mål); if (!H.død && !H.mål) H.kommandoAngrib(mål); }
      }
      if (t % 300 === 0) L.push(`${Math.round(s.ur.tid / 60)}m guld ${ø.guld} træ ${ø.træ} forsyning ${ø.forsyning} arbejdere ${b.arbejdere.filter((a) => !a.død).length} hær ${b.hær.length} helt lv ${H.level}${H.død ? ' (død)' : ''} ånder ${s.ånder.båret}/${s.ånder.ofret} · AI ${m.levende.length} enh, ${m.bygninger.filter((x) => !x.død).length} byg · byg: ${b.bygninger.map((x) => x.type + (x.færdig ? '' : '*' + Math.round(x.fremskridt * 100)) + (x.kø.length ? '[' + x.kø.map((k) => k.type) + ']' : '')).join(',')} · arb: ${b.arbejdere.filter((a) => !a.død).map((a) => a.tilstand).join(',')}`);
      await new Promise((r) => setTimeout(r, 0));
    }
    L.push(`max ledige arbejdere ${maxIdle}`);
    return L.join('\n');
  });
  console.log(`=== ${race} mod ${fj}\n${log}`);
  await page.close();
}
console.log(fejl.slice(0, 10).join('\n') || 'ingen fejl');
await b.close(); server.close();
