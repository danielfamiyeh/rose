export type SeqType = 'dna' | 'rna' | 'protein';

export class Seq {
  /**
   * Creates a new generalised Seq object used to represent a variety of biological data
   *
   * @param {string} _data Biological data string
   * @param {SeqType} _type Seq type
   */

  constructor(
    protected readonly _data: string,
    protected readonly _type: SeqType
  ) {}

  /**
   * Returns sequence data
   */
  get data() {
    return this._data;
  }

  /**
   * Returns sequence type
   */
  get type() {
    return this._type;
  }
}
