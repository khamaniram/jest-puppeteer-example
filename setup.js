const chalk = require('chalk')
const puppeteer = require('puppeteer')
const fs = require('fs')
const mkdirp = require('mkdirp')
const os = require('os')
const path = require('path')

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

module.exports = async function() {
  console.log(chalk.green(':Start'));
  let headless = false;
  let options = {
    headless : headless,
    timeout : 10000
  };
  if( headless ){
    options.args = [
      '--start-maximized',
      '--no-sandbox', 
      '--proxy-server="direct://"', 
      '--proxy-bypass-list=*',
      '--disable-gpu',
      '--no-default-browser-check',
      '--no-first-run',
      '--disable-default-apps',
      '--disable-popup-blocking',
      '--disable-translate',
      '--disable-background-timer-throttling',
      '--disable-renderer-backgrounding',
      '--disable-device-discovery-notifications',
      '--enable-logging',
      '--v=1'
    ];
  }

  const browser = await puppeteer.launch(options);
  // This global is not available inside tests but only in global teardown
  global.__BROWSER_GLOBAL__ = browser
  // Instead, we expose the connection details via file system to be used in tests
  mkdirp.sync(DIR)
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint())
}
