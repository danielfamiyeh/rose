import { Sequence } from './Sequence';

const bases = ['A', 'C', 'G', 'T'];

export class DNA extends Sequence {
  constructor(data: string) {
    super(data.toLocaleUpperCase(), 'dna');
  }

  get nucleoCount() {
    return bases.map(
      (base) => (this.data.match(new RegExp(base, 'g')) || []).length
    );
  }
}
