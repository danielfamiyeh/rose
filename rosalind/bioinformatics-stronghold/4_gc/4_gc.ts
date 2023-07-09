import path from 'path';

import { DNASeq } from '../../../src/seq';
import { FastaFile } from '../../../src/file/FastaFile';

FastaFile.read(path.join(__dirname, 'dataset.txt'), 'dna').then((data) => {
  const gcContents = data.map((seq) => (<DNASeq>seq).gcContent);
  const maxIndex = gcContents.indexOf(Math.max(...gcContents));
  const seq = <DNASeq>data[maxIndex];

  console.log(seq.meta.seqId);
  console.log(seq.gcContent);
});
