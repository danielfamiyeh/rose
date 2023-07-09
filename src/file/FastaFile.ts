import { DNASeq, RNASeq } from '../seq';
import { Seq, SeqType } from '../seq/Seq';
import { trycatchAsync } from '../utils/trycatch';
import { readFileAsync } from './utils/methods';

export type FastaFileMeta = {
  seqId: string;
  rest: string;
};

export class FastaFile {
  static async read(path: string, seqType: SeqType): Promise<Seq[]> {
    let seqIdx = -1;
    let sequences = [];

    await trycatchAsync(() =>
      readFileAsync(path, {
        onReadLine: (text: string) => {
          if (!text.startsWith('>')) {
            sequences[seqIdx].append(text);
          } else {
            const [seqId, rest] = text
              .split('|')
              .map((datum, i) => (i ? datum.trim() : datum.trim().slice(1)));

            const meta = {
              seqId: seqId ?? 'MISSING_IDENTIFIER',
              rest: rest ?? '',
            };

            seqIdx++;

            sequences[seqIdx] = (() => {
              switch (seqType) {
                case 'dna': {
                  return new DNASeq('', meta);
                }
                case 'rna': {
                  return new RNASeq('', meta);
                }
              }
            })();
          }
        },
      })
    );

    return sequences;
  }
}
