module.exports = {
  automock: false,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: '<rootDir>/coverage/',
  coveragePathIgnorePatterns: [
    '<rootDir>/src/client/index.js',
    '<rootDir>/src/server/index.js',
    '<rootDir>\\/src\\/server\\/(lib|middleware)\\/\\w*\\/index\\.js',
    '<rootDir>/node_modules/',
  ],
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  rootDir: '../../',
  setupFiles: ['<rootDir>/config/jest/test-setup.js'],
  testMatch: ['<rootDir>/src/**/*.test.js'],
  transform: {
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  verbose: true,
};
