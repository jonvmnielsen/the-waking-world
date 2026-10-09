// Seedet tilfældighed og glat støj (value noise) til kortgenerering.

export function rng(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash(x, y, seed) {
  let h = Math.imul(x, 374761393) + Math.imul(y, 668265263) + Math.imul(seed, 982451653);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

const glat = (t) => t * t * (3 - 2 * t);

function værdi(x, y, seed) {
  const x0 = Math.floor(x), y0 = Math.floor(y);
  const fx = glat(x - x0), fy = glat(y - y0);
  const a = hash(x0, y0, seed), b = hash(x0 + 1, y0, seed);
  const c = hash(x0, y0 + 1, seed), d = hash(x0 + 1, y0 + 1, seed);
  return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
}

// Fraktal støj i intervallet 0..1. skala = størrelsen på "klatterne" i felter.
export function støj(x, y, seed, skala = 8, lag = 3) {
  let sum = 0, amp = 1, norm = 0, f = 1 / skala;
  for (let i = 0; i < lag; i++) {
    sum += værdi(x * f, y * f, seed + i * 31) * amp;
    norm += amp; amp *= 0.5; f *= 2;
  }
  return sum / norm;
}
