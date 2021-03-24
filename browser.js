const puppeteer = require('puppeteer');

async function startBrowser(){
    let browser;
    try {
        console.log("Opening the browser......");
        browser = await puppeteer.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true,
            slowMo: 250, // slow down by 250ms,
            devtools: true
        });
    } catch (err) {
        console.log("Could not create a browser instance => : ", err);
    }
    return browser;
}

module.exports = {
    startBrowser
};
