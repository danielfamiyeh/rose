import { Logger } from '../../utils/logger';

export const READ_FILE_DEFAULTS = Object.freeze({
  /**
   * Default function when a line is read from file
   *
   * @param {string} text     Line of text
   * @param {number} lineNum  Line number
   * @returns {void}
   */
  onReadLine: (text: string, lineNum?: number): void =>
    Logger.info(`Line ${lineNum + 1}: ${text}`),
});
