import { Seq, SeqType } from "./Seq";

export class NucleicAcidSeq extends Seq {
    constructor(data: string, type: SeqType) {
      super(data, type);
    }

  getNucleoCount(bases: string[]) {
    return bases.map(
      (base) => (this.data.match(new RegExp(base, 'g')) || []).length
    );
  }
}