import { assert } from 'chai';
import { DNA } from '../../src/seq';

describe('DNA test suite', () => {
  it('Should create a new DNA sequence', () => {
    const data = 'ATCG';
    const seq = new DNA(data);

    assert.equal(seq.data, data);
    assert.equal(seq.type, 'dna');
  });
});
