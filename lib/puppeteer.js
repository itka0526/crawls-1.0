let chrome = { args: [] };
let puppeteer;
import W from "chrome-aws-lambda";
import A from "puppeteer";
import S from "puppeteer-core";

if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
    // running on the Vercel platform.
    chrome = W;
    puppeteer = S;
    // chrome = require("chrome-aws-lambda");
    // puppeteer = require("puppeteer-core");
} else {
    // running locally.
    // puppeteer = require("puppeteer");
    puppeteer = A;
}

export const puppeteerGetData = async (url) => {
    try {
        let browser = await puppeteer.launch({
            args: [
                ...chrome.args,
                "--hide-scrollbars",
                "--disable-web-security",
            ],
            defaultViewport: chrome.defaultViewport,
            executablePath: await chrome.executablePath,
            headless: true,
            ignoreHTTPSErrors: true,
        });

        const page = await browser.newPage();
        await page.goto(url);

        return (await page.title()) || "shit2";
    } catch (err) {
        console.error(err);
        return "shit";
    }
};
