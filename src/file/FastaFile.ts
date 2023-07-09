import { trycatchAsync } from '../utils/trycatch';
import { readFileAsync } from './utils/methods';

export type FastaFileMeta = {
  seqId: string;
  rest: string;
};

export class FastaFile {
  constructor(
    private readonly _data: string,
    private readonly _meta: FastaFileMeta
  ) {}

  static async read(path: string): Promise<FastaFile> {
    let data = '';
    let meta = { seqId: '', rest: '' };

    await trycatchAsync(() =>
      readFileAsync(path, {
        onReadLine: (lineNum: number, text: string) => {
          if (lineNum) {
            data += text;
          } else {
            const [seqId, rest] = text.split('|').map((datum) => datum.trim());
            meta = { seqId: seqId ?? 'IDENTIFIER', rest: rest ?? '' };
          }
        },
      })
    );

    return new FastaFile(data, meta);
  }

  get data() {
    return this._data;
  }

  get meta() {
    return this._meta;
  }
}
