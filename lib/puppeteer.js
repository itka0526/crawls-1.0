// let chrome = { args: [] };
// let puppeteer;
// import W from "chrome-aws-lambda";
// import A from "puppeteer";
// import S from "puppeteer-core";

// if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
//     // running on the Vercel platform.
//     chrome = W;
//     puppeteer = S;
//     // chrome = require("chrome-aws-lambda");
//     // puppeteer = require("puppeteer-core");
// } else {
//     // running locally.
//     // puppeteer = require("puppeteer");
//     puppeteer = A;
// }

// export const puppeteerGetData = async (url) => {
//     try {
//         let browser = await puppeteer.launch({
//             ignoreDefaultArgs: ["--disable-extensions"],
//             args: [
//                 ...chrome.args,
//                 "--hide-scrollbars",
//                 "--disable-web-security",
//             ],
//             defaultViewport: chrome.defaultViewport,
//             executablePath: await chrome.executablePath,
//             headless: true,
//             ignoreHTTPSErrors: true,
//         });

//         const page = await browser.newPage();
//         await page.goto(url);
//         page.to;

//         return (await page.title()) || "shit2";
//     } catch (err) {
//         console.error(err);
//         return "shit";
//     }
// };
import chrome from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";

export async function puppeteerGetData(url) {
    const options = process.env.AWS_REGION
        ? {
              args: chrome.args,
              executablePath: await chrome.executablePath,
              headless: chrome.headless,
          }
        : {
              args: [],
              executablePath:
                  process.platform === "win32"
                      ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
                      : process.platform === "linux"
                      ? "/usr/bin/google-chrome"
                      : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
          };
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    await page.setViewport({ width: 2000, height: 1000 });
    await page.goto(url, { waitUntil: "networkidle0" });
    return await page.screenshot({ type: "png" });
}
