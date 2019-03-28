jest.setTimeout(10000);
describe(  'Home Page',  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage();
      page.setViewport({width:1024, height:1024});
      await page.goto('https://google.com',{ timeout: 0});
    });

    afterAll(async () => {
      await page.close();
    });

    it('should load without error', async () => {
      let text = await page.evaluate(() => document.body.textContent);
      expect(text).toContain('google');
    });
  });
