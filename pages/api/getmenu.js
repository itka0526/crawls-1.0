import getMenu from "../../lib/getMenu";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const results = await getMenu(2);
            res.status(200).json(results);
        } catch (error) {
            res.status(500).send("Error! Fetching data failed.");
        }
    } else {
        res.status(500).send("Error! Method wrong! ");
    }
}
