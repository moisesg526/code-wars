// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
// Your function receives one side of the DNA (string, except for Haskell); you need to return the
// other complementary side. DNA strand is never empty or there is no DNA at all (again, except for
// Haskell).
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function dnaStrand(dna) {
  const DNAComplement = {
    G: "C",
    C: "G",
    T: "A",
    A: "T",
  };

  return dna
    .split("")
    .map((elem) => DNAComplement[elem])
    .join("");
}
dnaStrand("GGCTTGAA");
