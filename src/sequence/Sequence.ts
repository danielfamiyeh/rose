export type SequenceType = 'dna' | 'rna' | 'protein';

export class Sequence {
  constructor(protected data: string, protected type: SequenceType) {}
}
