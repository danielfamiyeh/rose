import { Logger } from '../../utils/logger';

export const READ_FILE_DEFAULTS = Object.freeze({
  onReadLine: (text: string, lineNum?: number) =>
    Logger.info(`Line ${lineNum + 1}: ${text}`),
});
