export type SequenceType = 'dna' | 'rna' | 'protein';

export class Sequence {
  /**
   * Creates a new generalised Sequence object used to represent a variety of biological data
   *
   * @param {string} data Biological data string
   * @param {SequenceType} type Sequence type
   */

  constructor(protected data: string, protected type: SequenceType) {}
}
