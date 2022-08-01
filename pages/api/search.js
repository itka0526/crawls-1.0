import { load } from "cheerio";
import { URL } from "url";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { query } = req.body;
        const search = `https://www.google.mn/search?q=site%3A.mn+${query}&ei=lernYor6Caju2roPp_y--AY&ved=0ahUKEwjKmMqZ9KX5AhUot1YBHSe-D28Q4dUDCA0&uact=5&oq=site%3A.mn+huvtsas&gs_lcp=Cgdnd3Mtd2l6EANKBAhBGAFKBAhGGABQrwZY1QdgzgloAnAAeACAAXmIAdwBkgEDMS4xmAEAoAEBwAEB&sclient=gws-wiz`;

        const pending_response = await fetch(search);
        const html = await pending_response.text();

        const $ = load(html);

        const HTML_RESULTS_CONTAINER = $("#main");

        const blacklist = /google/gi;
        const temp = [];

        const replaceLinkStructure = {
            ["URL starts with /url?q="]: /\/url\?q=/gi,
            ["Google's custom param remove"]: /&sa=U&ved=/,
        };

        function recursive(element) {
            if (
                element.attr("href") &&
                blacklist.test(element.attr("href")) === false
            ) {
                let link = element
                    .attr("href")
                    .replace(
                        replaceLinkStructure["URL starts with /url?q="],
                        ""
                    );

                try {
                    const text = element.text();
                    let validURL = new URL(link);

                    validURL = validURL.href.slice(
                        0,
                        replaceLinkStructure[
                            "Google's custom param remove"
                        ].exec(validURL).index
                    );

                    temp.push({ text, link: validURL });
                } catch (error) {
                    console.error(link);
                }
            }
            if (element.children().length <= 0) return;
            return element.children().each((_, item) => recursive($(item)));
        }

        recursive(HTML_RESULTS_CONTAINER);

        res.status(200).json(temp);
    } else {
        res.status(500).send("Error! Method wrong! ");
    }
}
