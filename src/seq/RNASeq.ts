import { NucleicAcidSeq } from './NucleicAcidSeq';

export class RNASeq extends NucleicAcidSeq {
  private readonly _alphabet = ['A', 'C', 'G', 'U'];

  /**
   * Creates a new RNA object
   * @param {string} data RNA sequence string
   */
  constructor(data: string) {
    super(data.toLocaleUpperCase(), 'rna');
  }

  /**
   * Returns array of nucleotide counts in the order A C G U
   */
  get nucleoCount() {
    return this.getNucleoCount(this._alphabet);
  }
}
