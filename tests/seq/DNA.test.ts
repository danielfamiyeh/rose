import { assert } from 'chai';
import { DNA } from '../../src/seq/DNA';

describe('DNA test suite', () => {
  it('should create a new DNA sequence', () => {
    const data = 'ATCG';
    const seq = new DNA(data);

    assert.equal(seq.data, data);
    assert.equal(seq.type, 'dna');
  });

  it('should count the nucleotides in a sequence', () => {
    const data = 'ATCTATAAGATCG';
    const seq = new DNA(data);
    
    const expected = [5, 2, 2, 4];
    const actual =  seq.nucleoCount;

    actual.forEach((bpCount, i) => assert.equal(bpCount, expected[i]));
  })
});
