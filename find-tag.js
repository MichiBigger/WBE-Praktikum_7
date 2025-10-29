/*
TypeScript-Funktion (auskommentiert für den Abgabeserver):

export function findTag(s: string): string | undefined {
  let i = 0;
  while (i < s.length) {
    if (s[i] === '<') {
      let start = i;
      let k = i + 1;
      while (k < s.length) {
        const ch = s[k];
        if (ch === '<') {
          // Neuer Kandidat beginnt hier
          start = k;
        } else if (ch === '>') {
          const name = s.slice(start + 1, k);
          if (name.length === 0) return undefined;
          // Leerzeichen im Tag-Namen sind nicht erlaubt
          if (name.indexOf(' ') !== -1) return undefined;
          return name;
        }
        k++;
      }
      // Kein schließendes '>' gefunden
      return undefined;
    }
    i++;
  }
  return undefined;
}
*/

// Vom Compiler erzeugter JavaScript-Code für den Abgabeserver:
function findTag(s) {
  var i = 0;
  while (i < s.length) {
    if (s[i] === '<') {
      var start = i;
      var k = i + 1;
      while (k < s.length) {
        var ch = s[k];
        if (ch === '<') {
          start = k; // beginne neuen Kandidaten
        } else if (ch === '>') {
          var name = s.slice(start + 1, k);
          if (name.length === 0) return undefined;
          if (name.indexOf(' ') !== -1) return undefined; // keine Leerzeichen erlaubt
          return name;
        }
        k++;
      }
      return undefined; // kein '>' gefunden
    }
    i++;
  }
  return undefined;
}

module.exports = { findTag };
