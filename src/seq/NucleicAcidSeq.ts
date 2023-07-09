import { Seq, SeqType } from './Seq';

export class NucleicAcidSeq extends Seq {
  constructor(data: string, type: SeqType, meta?: any) {
    super(data, type, meta);
  }

  toString() {
    return `${this._type}: ${this._data}`;
  }

  getNucleoCount(bases: string[]) {
    return bases.map(
      (base) => (this.data.match(new RegExp(base, 'g')) || []).length
    );
  }
}
