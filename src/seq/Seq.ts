/** Sequence type */
export type SeqType = 'dna' | 'rna' | 'protein';

/** Sequence distance type */
export type SeqDistanceType = 'hamming';

export class Seq {
  /**
   * Creates a new generalised Seq object used to represent a variety of biological data
   *
   * @param {string} _data  Biological data string
   * @param {SeqType} _type Seq type
   * @param {any} _meta     Extra metadata
   */

  constructor(
    protected _data: string,
    protected readonly _type: SeqType,
    protected readonly _meta: any = {}
  ) {}

  /**
   * Append sequence data with extra characters
   *
   * @param {string} str Input string
   */
  append(str: string) {
    this._data += str;
  }

  /** Returns sequence data */
  get data() {
    return this._data;
  }

  /** Returns sequence type */
  get type() {
    return this._type;
  }

  /** Returns extra metadata */
  get meta() {
    return this._meta;
  }
}
