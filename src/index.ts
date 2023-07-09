import path from 'path';

import { FastaFileIO } from './file/FastaFileIO';

export * as Seq from './seq';

FastaFileIO.read(path.join(__dirname, 'asdf.txt')).then((data) =>
  console.log(data)
);
