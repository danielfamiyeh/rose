import { assert } from 'chai';

import { DNASeq } from '../../src/seq';

describe('DNA test suite', () => {
  it('should create a new DNA sequence', () => {
    const data = 'ATCG';
    const seq = new DNASeq(data);

    assert.equal(seq.data, data);
    assert.equal(seq.type, 'dna');
  });

  it('should count the nucleotides in a sequence', () => {
    const data = 'ATCTATAAGATCG';
    const seq = new DNASeq(data);

    const expected = [5, 2, 2, 4];
    const actual = seq.nucleoCount;

    actual.forEach((bpCount, i) => assert.equal(bpCount, expected[i]));
  });

  it('should transcribe a DNA sequence to an RNA sequence', () => {
    const data = 'GATGGAACTTGACTACGTAAATT';
    const seq = new DNASeq(data);

    const expected = 'GAUGGAACUUGACUACGUAAAUU';
    const actual = seq.asRNA;

    assert.equal(actual.data, expected);
  });

  it('should return the reverse compliment of a DNA sequence', () => {
    const data_1 = 'AAAACCCGGT';
    const expected_1 = 'ACCGGGTTTT';

    const seq_1 = new DNASeq(data_1);
    const actual_1 = seq_1.revComp;

    assert.equal(actual_1.data, expected_1);
  });
});
