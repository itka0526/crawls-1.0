import DatabaseClient from "../../lib/DatabaseClient";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { category_id, currentPage = 1 } = req.body;
            const data = await DatabaseClient.category.findUnique({
                where: { id: Number(category_id) },
                select: {
                    products: true,
                },
            });
            const pageNumber = Math.round(currentPage);
            const result = data.products.slice(
                (pageNumber - 1) * 100,
                pageNumber * 100
            );
            res.status(200).json([result, data] || "No products were found.");
        } catch (error) {
            console.error(error);
            res.status(500).send("Error! Fetching products failed .");
        }
    } else {
        res.status(500).send("Error! Method wrong! ");
    }
}
