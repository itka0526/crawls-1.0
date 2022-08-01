import { load } from "cheerio";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { query } = req.body;
        const search = `https://www.google.mn/search?q=${query}&sxsrf=ALiCzsYMkvaQSytaGmNucvjqZ3Ve4_VHvQ%3A1658848312160&ei=OATgYpPVCNbt2roP5uWegAQ&ved=0ahUKEwiT0YbD65b5AhXWtlYBHeayB0AQ4dUDCA4&uact=5&oq=gutal&gs_lcp=Cgdnd3Mtd2l6EAMyCggAEIAEEIcCEBQyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBwgAEIAEEAoyBQgAEIAEMgsILhCABBDHARCvAToHCAAQRxCwAzoKCAAQRxCwAxDJAzoHCAAQsAMQQzoKCAAQ5AIQsAMYAToPCC4Q1AIQyAMQsAMQQxgCOgwILhDIAxCwAxBDGAI6BAgjECc6CgguEMcBENEDEEM6BAguEEM6BAgAEEM6BwguENQCEEM6DgguEIAEEMcBENEDENQCSgQIQRgASgQIRhgBUMoNWJcRYNkSaANwAXgAgAGUAYgBrQWSAQMwLjWYAQCgAQHIARPAAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz`;

        const pending_response = await fetch(search);
        const html = await pending_response.text();
        const $ = load(html);

        const HTML_RESULTS_CONTAINER = $("body");

        const blacklist = /google/gi;
        const URLmustContain = [{ ["Must contain https://"]: /https:\/\//i }];
        const TextMustContain = [
            {
                "1 or more letters": /^.{1,}$/,
            },
        ];
        const temp = [];

        const replaceLinkStructure = {
            ["URL starts with /url?q="]: /\/url\?q=/gi,
        };

        function recursive(element) {
            if (
                element.attr("href") &&
                blacklist.test(element.attr("href")) === false
            ) {
                const link = element
                    .attr("href")
                    .replace(
                        replaceLinkStructure["URL starts with /url?q="],
                        ""
                    );

                const text = element.text();

                const passedURLTest = URLmustContain.some((test) => {
                    const TEST_REGEX = Object.values(test)[0];
                    return TEST_REGEX.test(link);
                });

                const passedTextTest = TextMustContain.some((test) => {
                    const TEST_REGEX = Object.values(test)[0];
                    return TEST_REGEX.test(text);
                });

                passedURLTest && passedTextTest && temp.push({ text, link });
            }
            if (element.children().length <= 0) return;
            return element.children().each((_, item) => recursive($(item)));
        }

        recursive(HTML_RESULTS_CONTAINER);

        res.status(200).send(temp);
    } else {
        res.status(500).send("Error! Method wrong! ");
    }
}
