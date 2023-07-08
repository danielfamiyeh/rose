import { NucleicAcidSeq } from './NucleicAcidSeq';
import { RNASeq } from './RNASeq';

export class DNASeq extends NucleicAcidSeq {
  private _bases = ['A', 'C', 'G', 'T'];

  /**
   * Creates a new DNA object
   * @param {string} data DNA sequence string
   */
  constructor(data: string) {
    super(data.toLocaleUpperCase(), 'dna');
  }

  /**
   * Returns array of nucleotide counts in the order A C G T
   */
  get nucleoCount() {
    return this.getNucleoCount(this._bases);
  }

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
        .join('')
    );
  }

  get asRNA() {
    return new RNASeq(this._data.replace(/T/g, 'U'));
  }
}
