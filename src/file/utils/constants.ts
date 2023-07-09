import { Logger } from '../../utils/logger';

export const READ_FILE_DEFAULTS = Object.freeze({
  onReadLine: (lineNum: number, text: string) =>
    Logger.info(`Line ${lineNum + 1}: ${text}`),
});
