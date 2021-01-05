module.exports = {
  ...require('@snowpack/app-scripts-react/jest.config.js')(),
  moduleNameMapper: {
    '@components': '<rootDir>/src/components',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@types': '<rootDir>/src/types.ts',
  },
}
