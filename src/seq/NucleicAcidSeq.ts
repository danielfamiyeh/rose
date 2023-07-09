import { Seq, SeqType } from './Seq';

/** Class representing a nucleic acid sequence */
export class NucleicAcidSeq extends Seq {
  /**
   * NucleicAcidSeq constructor
   *
   * @param {string} data   Sequence data
   * @param {SeqType} type  Sequence type
   * @param {any} meta      Extra metadata
   */
  constructor(data: string, type: SeqType, meta?: any) {
    super(data, type, meta);
  }

  /**
   * Serializes a nucleic acid sequnce into a string
   *
   * @returns {string} Serialized sequence object
   */
  toString(): string {
    return `${this._type}: ${this._data}`;
  }

  /**
   * Returns nucleotide count for each base
   *
   * @param {string[]} bases Array of bases
   * @returns {number[]}     Nucleotide count
   */
  getNucleoCount(bases: string[]): number[] {
    return bases.map(
      (base) => (this.data.match(new RegExp(base, 'g')) || []).length
    );
  }
}
