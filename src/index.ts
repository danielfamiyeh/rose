import path from 'path';

import { FastaFile } from './file/FastaFile';

export * as Seq from './seq';

FastaFile.read(path.join(__dirname, 'asdf.txt')).then((data) =>
  console.log(data)
);
