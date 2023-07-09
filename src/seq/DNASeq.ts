import { NucleicAcidSeq } from './NucleicAcidSeq';
import { RNASeq } from './RNASeq';

/** Class representing a DNA sequence */
export class DNASeq extends NucleicAcidSeq {
  /** DNA string alphabet */
  private static readonly _alphabet = ['A', 'C', 'G', 'T'];

  /**
   * Creates a new DNA object
   *
   * @param {string} data DNA sequence string
   * @param {any} meta    Extra metadata
   */
  constructor(data: string, meta?: any) {
    super(data.toLocaleUpperCase(), 'dna', meta);
  }

  /** Returns array of nucleotide counts in the order A C G T */
  get nucleoCount() {
    return this.getNucleoCount(DNASeq._alphabet);
  }

  /** Returns the reverse complement of the DNA sequence */
  get revComp() {
    return new DNASeq(
      this._data
        .split('')
        .reverse()
        .map((base) => {
          switch (base) {
            case 'A':
              return 'T';
            case 'T':
              return 'A';
            case 'C':
              return 'G';
            case 'G':
              return 'C';
          }
        })
        .join(''),
      this._meta
    );
  }

  /** Returns DNA sequence as RNA */
  get asRNA() {
    // TODO: Not sure about passing meta here since it's technically different sequence altogether
    return new RNASeq(this._data.replace(/T/g, 'U'), this._meta);
  }

  /** Calculates GC-content as a percentage */
  get gcContent() {
    const bases = ['G', 'C'];
    const gcOccurence = [
      ...bases
        .map((base) => base)
        .flatMap((base) => this.data.match(new RegExp(base, 'g')) || []),
    ].length;

    return (gcOccurence / this.data.length) * 100;
  }
}
