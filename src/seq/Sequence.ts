export type SequenceType = 'dna' | 'rna' | 'protein';

export class Sequence {
  /**
   * Creates a new generalised Sequence object used to represent a variety of biological data
   *
   * @param {string} _data Biological data string
   * @param {SequenceType} _type Sequence type
   */

  constructor(protected _data: string, protected _type: SequenceType) {}

  get data() {
    return this._data;
  }

  get type() {
    return this._type;
  }
}
