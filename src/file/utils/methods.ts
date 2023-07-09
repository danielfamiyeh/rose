import fs from 'fs';
import events from 'events';
import readline from 'readline';

import { Logger } from '../../utils/logger';
import { READ_FILE_DEFAULTS } from './constants';

/** Options for the readFileAsync() method */
type ReadFileAsyncOptions = {
  /**
   * Function executed every time line is read from file
   *
   * @param {string} text     Text from line
   * @param {number} lineNum  Current line number
   * @returns {void}
   */
  onReadLine: (text: string, lineNum?: number) => void;
};

/**
 * Reads file asynchronously
 *
 * @param {string} path                   Absolute path to file
 * @param {ReadFileAsyncOptions} options  Options
 */
export const readFileAsync = async (
  path: string,
  options: ReadFileAsyncOptions
) => {
  const _options = Object.assign({}, { ...READ_FILE_DEFAULTS }, options);
  const rl = readline.createInterface({
    input: fs.createReadStream(path),
    crlfDelay: Infinity,
  });
  let lineNum = 0;
  rl.on('line', (text) => {
    _options.onReadLine(text, lineNum);
    if (!(lineNum % 100)) {
      Logger.info(
        `Reading line: ${lineNum + 1}. Memory used: ${
          process.memoryUsage().heapUsed / 1024 / 1024
        } MB`
      );
    }
    lineNum++;
  });
  await events.once(rl, 'close');
};
