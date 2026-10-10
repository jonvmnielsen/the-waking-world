// Skærmbilleder fra bestemte steder på kortet (til at se terræn og natur efter).
//   SKUD='[{"navn":"base","x":0,"z":0,"afstand":40}]' node tools/visning.mjs
import { chromium } from 'playwright-core';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROD = path.resolve(import.meta.dirname, '..');
const DIST = path.join(ROD, 'dist');
const UD = path.join(ROD, 'test-output', process.env.NAVN ?? 'visning');
fs.mkdirSync(UD, { recursive: true });
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.glb': 'model/gltf-binary', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  const p = path.join(DIST, decodeURIComponent(req.url.split('?')[0]).replace(/\/$/, '/index.html'));
  if (!p.startsWith(DIST) || !fs.existsSync(p)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': MIME[path.extname(p)] ?? 'application/octet-stream' });
  fs.createReadStream(p).pipe(res);
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: +(process.env.W ?? 390), height: +(process.env.H ?? 844) }, hasTouch: true, isMobile: true });
page.on('pageerror', (e) => console.log('FEJL', e.message));
await page.goto(`http://127.0.0.1:${server.address().port}/`);
await page.waitForSelector('#essensvalg.vis', { timeout: 90000 });
await page.click('.essens.vold');
await page.waitForFunction(() => window.klar === true);
if (process.env.FOER) console.log(await page.evaluate(process.env.FOER));
const skud = JSON.parse(process.env.SKUD ?? '[]');
for (const s of skud) {
  const info = await page.evaluate((s) => {
    const spil = window.spil;
    if (s.syn !== false) spil.visHeleKortet();
    if (s.kode) eval(s.kode);
    spil.rig.følger = false;
    const h = spil.helt;
    spil.rig.fokus.set(s.x ?? h.x, 0, s.z ?? h.z);
    spil.rig.afstand = s.afstand ?? 40;
    if (s.sim) spil.simuler(s.sim);
    return s.ud ? eval(s.ud) : null;
  }, s);
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(UD, `${s.navn}.png`) });
  if (info) console.log(s.navn, JSON.stringify(info));
}
await browser.close();
server.close();
