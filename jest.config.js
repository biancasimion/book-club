module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./src/tests/test-utils.jsx'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
};
