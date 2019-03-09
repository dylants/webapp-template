const { createLogger, format, transports } = require('winston');

const config = require('../../../../config');

class Logger {
  constructor() {
    const { combine, json, timestamp } = format;

    this.logger = createLogger({
      format: combine(timestamp(), json()),
      level: config.logLevel,
      transports: [
        new transports.Console({
          silent: process.env.NODE_ENV === 'test',
        }),
      ],
    });
  }

  /* istanbul ignore next */
  error(...args) {
    this.logger.error(...args);
  }

  /* istanbul ignore next */
  warn(...args) {
    this.logger.warn(...args);
  }

  /* istanbul ignore next */
  info(...args) {
    this.logger.info(...args);
  }

  /* istanbul ignore next */
  verbose(...args) {
    this.logger.verbose(...args);
  }

  /* istanbul ignore next */
  debug(...args) {
    this.logger.debug(...args);
  }

  /* istanbul ignore next */
  silly(...args) {
    this.logger.silly(...args);
  }
}

module.exports = new Logger();
