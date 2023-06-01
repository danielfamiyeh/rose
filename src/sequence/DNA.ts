import { Sequence } from './Sequence';

const bases = ['A', 'C', 'G', 'T'];

export class DNA extends Sequence {
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
    return bases.map(
      (base) => (this.data.match(new RegExp(base, 'g')) || []).length
    );
  }
}
