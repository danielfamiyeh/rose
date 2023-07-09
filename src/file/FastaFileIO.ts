import { trycatchAsync } from '../utils/trycatch';
import { readFileAsync } from './utils/methods';

export class FastaFileIO {
  static async read(path: string): Promise<string> {
    let data = '';
    let meta = { seqId: '', rest: '' };

    await trycatchAsync(() =>
      readFileAsync(path, {
        onReadLine: (lineNum: number, text: string) => {
          if (lineNum) {
            data += text;
          } else {
            const [seqId, rest] = text.split('|');
            meta = { seqId: seqId ?? 'IDENTIFIER', rest: rest ?? '' };
          }
        },
      })
    );

    return data;
  }
}
