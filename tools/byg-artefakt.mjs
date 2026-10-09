// Bygger spillet som en Claude-side: alle .glb-modeller pakkes i assets/modelpakke.json
// (Claude-sider kan ikke servere .glb direkte), og siden skrives uden <html>/<head>/<body>.
//   node tools/byg-artefakt.mjs   → dist-artefakt/
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROD = path.resolve(import.meta.dirname, '..');
const UD = path.join(ROD, 'dist-artefakt');
execSync(`npx vite build --outDir ${UD} --emptyOutDir`, { cwd: ROD, stdio: 'inherit', env: { ...process.env, VITE_MODELPAKKE: '1' } });

// Saml modellerne og fjern de løse filer
const pakke = {};
const modeller = path.join(UD, 'assets');
function gennemgå(mappe) {
  for (const navn of fs.readdirSync(mappe)) {
    const p = path.join(mappe, navn);
    if (fs.statSync(p).isDirectory()) { gennemgå(p); continue; }
    if (!navn.endsWith('.glb')) continue;
    const id = path.relative(modeller, p).replace(/\\/g, '/').replace(/\.glb$/, '');
    pakke[id] = fs.readFileSync(p).toString('base64');
  }
}
gennemgå(modeller);
fs.writeFileSync(path.join(modeller, 'modelpakke.json'), JSON.stringify(pakke));
for (const navn of fs.readdirSync(modeller)) {
  const p = path.join(modeller, navn);
  if (fs.statSync(p).isDirectory()) fs.rmSync(p, { recursive: true });
}

// Siden: behold titel, ikon, fonte, stylesheet og script fra <head>, plus hele <body>
const html = fs.readFileSync(path.join(UD, 'index.html'), 'utf8');
const hoved = html.match(/<head>([\s\S]*)<\/head>/)[1].split('\n').filter((l) => /<title>|<link|<script/.test(l)).map((l) => l.trim());
const krop = html.match(/<body>([\s\S]*)<\/body>/)[1].trim();
fs.writeFileSync(path.join(UD, 'side.html'), `${hoved.join('\n')}\n${krop}\n`);

const filer = fs.readdirSync(modeller).map((n) => `assets/${n}`);
console.log(`Modeller pakket: ${Object.keys(pakke).length}, ${(fs.statSync(path.join(modeller, 'modelpakke.json')).size / 1e6).toFixed(1)} MB`);
console.log(JSON.stringify(filer));
