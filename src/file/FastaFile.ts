import { DNASeq, RNASeq } from '../seq';
import { Seq, SeqType } from '../seq/Seq';

import { readFileAsync } from './utils/methods';
import { trycatchAsync } from '../utils/trycatch';

/** Fasta file metadata */
export type FastaFileMeta = {
  /** Sequence ID */
  seqId: string;
  /** Other metadata */
  rest: string;
};

/**
 * Class for interacting with fasta files
 */
export class FastaFile {
  /**
   * Reads FASTA file from file
   *
   * @param {string} path       Absolute file path
   * @param {SeqType} seqType   Sequence type
   * @returns {Promise<Seq[]>}  Array of sequences
   */

  static async read(path: string, seqType: SeqType): Promise<Seq[]> {
    const sequences = [];

    let seqIdx = -1;

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
