import ApolloInstance from "../../lib/ApolloClient";
import DatabaseClient from "../../lib/DatabaseClient";
import queryGoogleForProduct from "../../lib/queryGoogleForProduct";
import GET_MODEL_NUMBER from "../../queries/getModelNumber.gql";

export default async function handler(req, res) {
    if (req.method === "POST") {
        console.log("REQUEST!!");
        const { query } = req.body;
        const { nomin_sku: isSkuKeyTrue } = req.query;

        if (isSkuKeyTrue) {
            try {
                const doesDBhaveIt =
                    await DatabaseClient.GoogleSearchCache.findUnique({
                        where: {
                            sku: query,
                        },
                    });

                if (doesDBhaveIt) {
                    console.log("Database has it!");

                    return res.json(doesDBhaveIt);
                } else {
                    const nominResults = await ApolloInstance.query({
                        query: GET_MODEL_NUMBER,
                        variables: { sku: query },
                    });
                    console.log(nominResults.data.getOverviewData[0].model);
                    const googleResults = await queryGoogleForProduct(
                        nominResults.data.getOverviewData[0].model
                    );

                    if (!nominResults.data.getOverviewData[0].model) {
                        return res.json({
                            sku: query,
                            model: "unknown",
                            results: [],
                        });
                    }
                    console.log("Google has it!", googleResults);
                    const response = {
                        sku: query,
                        model: nominResults.data.getOverviewData[0].model,
                        results: googleResults,
                    };

                    await DatabaseClient.GoogleSearchCache.create({
                        data: response,
                    });

                    res.json(response);
                }
            } catch (error) {
                console.error(error);
                return res.json([]);
            }
        } else {
            const results = await queryGoogleForProduct(query);

            return res.status(200).json(results);
        }
    } else {
        return res.status(500).send("Error! Method wrong! ");
    }
}
