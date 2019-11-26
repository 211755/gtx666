const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({
        headless: false,
        ignoreDefaultArgs: ['-enable-automation'],
        args: [],
        userDataDir: 'C:\\Users\\gerry\\AppData\\Local\\Google\\Chrome\\User Data\\user666'
    });
    const page = await browser.newPage();
    await page.evaluateOnNewDocument(() => {

        Object.defineProperty(navigator, 'webdriver', {
            get: () => false,
        });
        Object.defineProperty(navigator, 'platform', {
            value: 'my custom value',
            configurable: true // necessary to change value more than once
        });
    });
    await page.emulate({
        viewport: {
            name: 'hahah',
            width: 500,
            height: 500,
            deviceScaleFactor: 1,
            hasTouch: false,
            isMobile: true,
            isLandscape: false,
        },
        userAgent: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-en) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4'
    });
    await page.goto('https://amiunique.org/fp');

})();
