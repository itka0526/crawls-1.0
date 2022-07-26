import serp from "serp";

export default async function handler(req, res) {
    if (req.method === "POST") {
        console.log("started");
        const { query } = req.body;
        var options = {
            qs: {
                q: query,
            },
            num: 50,
            delay: 2000, // in ms
        };
        const links = await serp.search(options);
        const filtered_links = links.filter(({ url }) => /.mn/.test(url)) || [];
        res.status(200).json(filtered_links);
    } else {
        res.status(500).send("Error! Method wrong! ");
    }
}
