import ApolloInstance from "../../lib/ApolloClient";
import DatabaseClient from "../../lib/DatabaseClient";
import queryGoogleForProduct from "../../lib/queryGoogleForProduct";
import GET_MODEL_NUMBER from "../../queries/getModelNumber.gql";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { query } = req.body;
        const { nomin_sku: isSkuKeyTrue } = req.query;

        if (isSkuKeyTrue) {
            try {
                const {
                    data: {
                        getOverviewData: [{ model }],
                    },
                } = await ApolloInstance.query({
                    query: GET_MODEL_NUMBER,
                    variables: { sku: query },
                });
                if (!model) {
                    return res.json([]);
                }
                const doesDBhaveIt = await DatabaseClient.product.findUnique({
                    where: {
                        sku: model,
                    },
                    select: {
                        product: true,
                    },
                });

                if (doesDBhaveIt) {
                    console.log("Database has it!");
                    const { product } = doesDBhaveIt;
                    return res.json(product);
                } else {
                    const results = await queryGoogleForProduct(model);
                    console.log("Google has it!");

                    return await DatabaseClient.product.create({
                        data: {
                            sku: model,
                            product: results,
                        },
                    });
                }
            } catch (error) {
                return res.json([
                    {
                        status: "failed",
                        message: `Couldn't fetch model number. [${query}]`,
                    },
                ]);
            }
        }

        const results = await queryGoogleForProduct(query);

        return res.status(200).json(results);
    } else {
        return res.status(500).send("Error! Method wrong! ");
    }
}
