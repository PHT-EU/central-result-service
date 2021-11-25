import {
    Logger, createLogger, format, transports,
} from 'winston';
import { getWritableDirPath } from '../../config/paths';

let logger : undefined | any;

/*
Levels
{
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
}
 */

export function useLogger() : Logger {
    if (typeof logger !== 'undefined') {
        return logger;
    }

    logger = createLogger({
        format: format.json(),
        level: 'debug',
        transports: [
            new transports.Console({
                level: 'debug',
            }),
            new transports.File({
                filename: `${getWritableDirPath()}/error.log`,
                level: 'warn',
            }),
        ],
    });

    return logger;
}
