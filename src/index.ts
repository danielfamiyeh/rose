import path from 'path';

import { FastaFile } from './file/FastaFile';

export * as Seq from './seq';

FastaFile.read(path.join(__dirname, 'asdf.txt'), 'dna').then((data) =>
  console.log(data)
);
