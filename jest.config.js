module.exports = {
  globalSetup: './setup.js',
  globalTeardown: './teardown.js',
  testEnvironment: './puppeteer_environment.js',
  reporters: [
    "jest-spec-reporter",
    "jest-html-reporters"
  ],
}
