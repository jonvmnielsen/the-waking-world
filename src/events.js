// Lille begivenhedsbus så systemerne kan tale sammen uden direkte referencer
const lyttere = new Map();

export const bus = {
  on(navn, fn) {
    if (!lyttere.has(navn)) lyttere.set(navn, new Set());
    lyttere.get(navn).add(fn);
    return () => lyttere.get(navn).delete(fn);
  },
  emit(navn, data) {
    for (const fn of lyttere.get(navn) ?? []) fn(data);
  },
};
