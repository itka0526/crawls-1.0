import getProductDetail from "../../lib/getProductDetail";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            if (req.body.product_identifier) {
                const results = await getProductDetail(
                    req.body.product_identifier
                );
                return res.status(200).json(results);
            } else {
                return res
                    .status(400)
                    .send("Error! Incorrect format 'product_identifier.' ");
            }
        } catch (error) {
            return res.status(500).send("Error! Fetching data failed.");
        }
    } else {
        return res.status(500).send("Error! Method wrong! ");
    }
}
