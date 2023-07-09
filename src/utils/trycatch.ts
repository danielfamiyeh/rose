import { Logger } from './logger';

export const trycatchAsync = async (fn: (...args: any[]) => Promise<any>) => {
  try {
    return await fn();
  } catch (error) {
    Logger.error(error.message);
  }
};
