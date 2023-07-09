type LoggerLevel = 'info' | 'warning' | 'error';

export class Logger {
  static log(message: string, level: LoggerLevel) {
    console.log(`${level.toLocaleUpperCase()}: ${message}`);
  }

  static info(message: string) {
    Logger.log(message, 'info');
  }

  static warning(message: string) {
    Logger.log(message, 'warning');
  }

  static error(message: string) {
    Logger.log(message, 'error');
  }
}
