const winston = require('winston');

jest.mock('winston');

describe('logger', () => {
  let logger;

  beforeEach(() => {
    jest.mock('../../../../config', () => ({
      logLevel: 'awesome',
    }));

    const format = {
      combine: jest.fn(),
      json: jest.fn(),
      timestamp: jest.fn(),
    };
    winston.format = format;
    winston.transports.Console = jest.fn();

    logger = require('./logger');
  });

  it('log level is correctly set', () => {
    expect(winston.createLogger.mock.calls[0][0].level).toEqual('awesome');
  });

  it('has log level methods', () => {
    const methods = ['error', 'warn', 'info', 'verbose', 'debug', 'silly'];
    methods.forEach(method => {
      expect(typeof logger[method]).toBe('function');
    });
  });
});
