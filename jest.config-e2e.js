module.exports = {
  setupFiles: ['<rootDir>/test/setEnvVars.js'],
  silent: false,
  moduleFileExtensions: ['js', 'ts', "json"],
  rootDir: '.',
  maxWorkers: 1,
   testEnvironment: 'node',
  testRegex: '[.](spec|test).ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  gloabls: {
    "ts-jest": "tsconfig.e2e.json"
  }
};
