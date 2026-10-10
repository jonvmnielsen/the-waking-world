// Henter de lyde spillet bruger (lyde.json) fra game-assets og laver små MP3-filer i public/audio.
// Sonniss-klip (audio/...) er allerede MP3 og kopieres; Kenney-lyde (OGG) laves om til MP3,
// fordi ikke alle mobilbrowsere afspiller OGG. Skriver public/audio/lyde.json (navn → filer).
//   node tools/lyde.mjs   (kræver ../game-assets og ffmpeg)
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const ROD = path.resolve(import.meta.dirname, '..');
const LIB = path.resolve(ROD, '..', 'game-assets');
const cfg = JSON.parse(fs.readFileSync(path.join(ROD, 'lyde.json'), 'utf8'));
const ud = path.join(ROD, cfg.out ?? 'public/audio');
const katalog = JSON.parse(fs.readFileSync(path.join(LIB, 'catalog.json'), 'utf8')).assets;
const sonniss = JSON.parse(fs.readFileSync(path.join(LIB, 'audio', '_meta.json'), 'utf8'));
const ascii = (s) => s.replace(/æ/g, 'ae').replace(/ø/g, 'oe').replace(/å/g, 'aa');
const mønster = (s) => new RegExp('^' + s.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*') + '$');

fs.mkdirSync(ud, { recursive: true });
const manifest = {}, kilder = {};
let bytes = 0;
for (const [navn, specs] of Object.entries(cfg.lyde)) {
  const filer = [];
  for (const spec of specs) {
    const re = mønster(spec.replace(/^audio\//, ''));
    const fund = spec.startsWith('audio/')
      ? sonniss.sounds.filter((s) => re.test(s.id)).map((s) => ({ id: s.id, fil: path.join(LIB, s.file), licens: 'Sonniss GDC (se game-assets/licenses)' }))
      : katalog.filter((a) => re.test(a.id)).map((a) => ({ id: a.id, fil: path.join(LIB, a.file), licens: 'CC0 (Kenney)' }));
    if (!fund.length) console.log(`! intet fundet for ${spec}`);
    for (const f of fund) {
      const mål = path.join(ud, `${ascii(navn)}_${filer.length + 1}.mp3`);
      if (f.fil.endsWith('.mp3')) fs.copyFileSync(f.fil, mål);
      else execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-i', f.fil, '-map_metadata', '-1', '-ac', '1', '-ar', '44100', '-c:a', 'libmp3lame', '-b:a', '96k', mål]);
      filer.push(path.basename(mål));
      kilder[path.basename(mål)] = { kilde: f.id, licens: f.licens };
      bytes += fs.statSync(mål).size;
    }
  }
  manifest[navn] = filer;
}
fs.writeFileSync(path.join(ud, 'lyde.json'), JSON.stringify(manifest, null, 1));
fs.writeFileSync(path.join(ud, 'lyde.lock.json'), JSON.stringify(kilder, null, 1));
console.log(`✓ ${Object.values(manifest).flat().length} lyde i ${path.relative(ROD, ud)} (${(bytes / 1e6).toFixed(2)} MB)`);
