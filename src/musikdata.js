// Musikken (M14c, GDD 17b søjle 8: racer hele vejen igennem). Hver race har sit eget tema, der spilles af
// musik.js med syntetiske instrumenter. Toner er halvtonetrin over grundtonen (D). Mønstre er 16 trin pr. takt.
// The Tide: krigstrommer, en dyb drone og et horn i mol-pentatonik — om natten en fløjte og et hjerteslag.
// The Architects: strygere i akkorder, harpe-arpeggioer og et ædelt horn — om natten kun strygere og harpe.

export const GRUNDTONE = 38;   // MIDI-tone for D2

export const TEMAER = {
  tide: {
    tempo: 88,
    // Akkorder (som drone/flade) — én pr. 2 takter
    akkorder: [[0, 7, 12], [0, 7, 12], [-2, 5, 10], [3, 10, 15]],
    skala: [0, 3, 5, 7, 10, 12, 15, 17, 19],      // mol-pentatonik
    motiver: [[0, 2, 3, 2, 0], [3, 4, 3, 2, 1, 0], [0, 0, 2, 4, 3], [4, 3, 2, 3, 0], [2, 3, 4, 6, 4, 3]],
    melodi: 'horn', natMelodi: 'fløjte',
    trommer: { stor: [0, 6, 8, 11], lille: [4, 12, 14], ekstra: [2, 7, 10, 15] },   // ekstra: når der kæmpes
    natTrommer: { stor: [0, 8], lille: [], ekstra: [] },
    flade: 'drone', harpe: false,
  },
  arkitekter: {
    tempo: 72,
    akkorder: [[0, 3, 7, 12], [-4, 0, 3, 8], [3, 7, 10, 15], [-2, 2, 5, 10]],   // Dm – Bb – F – C
    skala: [0, 2, 3, 5, 7, 9, 10, 12, 14, 15],    // dorisk
    motiver: [[0, 2, 4, 5, 4], [4, 3, 2, 0], [0, 4, 7, 6, 4], [7, 6, 4, 5, 2], [2, 4, 5, 7, 4, 2]],
    melodi: 'horn', natMelodi: 'harpe',
    trommer: { stor: [], lille: [], ekstra: [0, 4, 8, 12, 14] },   // kun en march, når der kæmpes
    natTrommer: { stor: [], lille: [], ekstra: [] },
    flade: 'strygere', harpe: true,
  },
};

// Hvor længe et tema spiller, og hvor længe der er stille (så musikken ikke trætter — som WC3)
export const FORLØB = { takter: 16, pause: [6, 10] };
