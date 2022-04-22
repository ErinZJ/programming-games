/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageReporters: ['text-summary', 'lcov'],
  coverageDirectory: 'test-coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 60,
      lines: 80,
      statements: 80
    }
  },
  setupFiles: ['jest-canvas-mock'],
  // testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '\\.(css|less|scss|sass|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy'
  }
}
