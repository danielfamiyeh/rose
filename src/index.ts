import path from 'path';

import { FastaFile } from './file/FastaFile';
import { DNASeq } from './seq';

export * as Seq from './seq';

FastaFile.read(path.join(__dirname, 'dataset.txt'), 'dna').then((data) => {
  const gcContents = data.map((seq) => (<DNASeq>seq).gcContent);
  const maxIndex = gcContents.indexOf(Math.max(...gcContents));
  const seq = <DNASeq>data[maxIndex];

  console.log(seq.meta.seqId);
  console.log(seq.gcContent);
});
