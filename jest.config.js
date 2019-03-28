module.exports = {
  globalSetup: './setup.js',
  globalTeardown: './teardown.js',
  testEnvironment: './puppeteer_environment.js',
  reporters: [
  //  "default",
    "jest-spec-reporter",
   // "jest-mocha-reporter"
    //"jest-html-reporters",
    //"jest-stare"
  ],
}
