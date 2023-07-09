export type SeqType = 'dna' | 'rna' | 'protein';

export class Seq {
  /**
   * Creates a new generalised Seq object used to represent a variety of biological data
   *
   * @param {string} _data Biological data string
   * @param {SeqType} _type Seq type
   */

  constructor(
    protected _data: string,
    protected readonly _type: SeqType,
    protected readonly _meta: any = {}
  ) {}

  append(str: string) {
    this._data += str;
  }

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

  get meta() {
    return this._meta;
  }
}
