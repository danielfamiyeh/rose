import { assert } from 'chai';
import { Sequence } from '../../src/seq/Sequence';

describe('Sequence test suite', () => {
  it('should create a new Sequence', () => {
    const data = 'ATCG';
    const type = 'dna';

    const seq = new Sequence(data, type);

    assert.equal(seq.data, data);
    assert.equal(seq.type, type);
  });
});
