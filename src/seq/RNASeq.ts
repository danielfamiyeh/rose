import { NucleicAcidSeq } from './NucleicAcidSeq';

/** Class representing and RNA sequence */
export class RNASeq extends NucleicAcidSeq {
  /** RNA sequence alphabet */
  private static readonly _alphabet = ['A', 'C', 'G', 'U'];

  /**
   * Creates a new RNA object
   *
   * @param {string} data RNA sequence string
   * @param {any} meta    Other metadata
   */
  constructor(data: string, meta?: any) {
    super(data.toLocaleUpperCase(), 'rna', meta);
  }

  /** Returns array of nucleotide counts in the order A C G U */
  get nucleoCount() {
    return this.getNucleoCount(RNASeq._alphabet);
  }
}
