import queryGoogleForProduct from "../../lib/queryGoogleForProduct";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { query } = req.body;
        console.log(query);

        const results = await queryGoogleForProduct(query);

        res.status(200).json(results);
    } else {
        res.status(500).send("Error! Method wrong! ");
    }
}
