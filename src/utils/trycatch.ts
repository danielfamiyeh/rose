import { Logger } from './logger';

/**
 * Wraps asyncrhoronous function in try-catch and logs error to the console
 *
 * @param {Function} fn Asynchronous function
 * @returns {Promise<any>}
 */
export const trycatchAsync = async (
  fn: (...args: any[]) => Promise<any>
): Promise<any> => {
  try {
    return await fn();
  } catch (error) {
    Logger.error(error.message);
  }
};
