import { assert } from 'chai';

import { Seq } from '../../src/seq/Seq';

describe('Seq test suite', () => {
  it('should create a new Seq', () => {
    const data = 'ATCG';
    const type = 'dna';

    const seq = new Seq(data, type);

    assert.equal(seq.data, data);
    assert.equal(seq.type, type);
  });
});
