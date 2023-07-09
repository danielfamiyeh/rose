import { NucleicAcidSeq } from './NucleicAcidSeq';

export class RNASeq extends NucleicAcidSeq {
  private static readonly _alphabet = ['A', 'C', 'G', 'U'];

  /**
   * Creates a new RNA object
   * @param {string} data RNA sequence string
   */
  constructor(data: string, meta?: any) {
    super(data.toLocaleUpperCase(), 'rna', meta);
  }

  /**
   * Returns array of nucleotide counts in the order A C G U
   */
  get nucleoCount() {
    return this.getNucleoCount(RNASeq._alphabet);
  }
}
