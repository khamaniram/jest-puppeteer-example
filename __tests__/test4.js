const timeout = 50000;
jest.setTimeout(timeout);
describe(  'Home Page',  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage();
      await page.goto('https://google.com',{ timeout: 0});
    }, timeout);

    afterAll(async () => {
      await page.close();
    });

    it('should load without error', async () => {
      let text = await page.evaluate(() => document.body.textContent);
      expect(text).toContain('google');
    });
  },  timeout);
