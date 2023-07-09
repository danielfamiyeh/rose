/** Logger level */
type LoggerLevel = 'info' | 'warning' | 'error';

/** Class representing a logger */
export class Logger {
  /**
   * Generic logging function
   *
   * @param {string} message Message
   * @param {LoggerLevel} level Logger level
   */
  static log(message: string, level: LoggerLevel) {
    console.log(`${level.toLocaleUpperCase()}: ${message}`);
  }

  /**
   * Logs information message to the console
   *
   * @param {string} message Message
   */
  static info(message: string) {
    Logger.log(message, 'info');
  }

  /**
   * Logs warning message to the console
   *
   * @param {string} message Message
   */
  static warning(message: string) {
    Logger.log(message, 'warning');
  }

  /**
   * Logs error message to the console
   *
   * @param {string} message Message
   */
  static error(message: string) {
    Logger.log(message, 'error');
  }
}
