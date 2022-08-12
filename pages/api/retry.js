import DatabaseClient from "../../lib/DatabaseClient";
import getCategoryItems from "../../lib/getCategoryItems";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            if (req.body.password === process.env.PASSWORD) {
                const allCategoryIdentifiers =
                    await DatabaseClient.category.findMany({
                        select: {
                            id: true,
                        },
                        where: {
                            product_count: 0,
                        },
                    });

                const progress = allCategoryIdentifiers.slice().length;

                function sleep(ms) {
                    return new Promise((resolve) => setTimeout(resolve, ms));
                }

                while (allCategoryIdentifiers.length) {
                    await Promise.allSettled(
                        allCategoryIdentifiers
                            .splice(0, 25)
                            .map(async ({ id }) => {
                                const response = await getCategoryItems(
                                    {
                                        currentPage: 1,
                                        filters: {
                                            category_id: {
                                                eq: id,
                                            },
                                        },
                                        pageSize: 500,
                                    },
                                    true
                                );

                                const {
                                    data: {
                                        products: { items: api_products },
                                    },
                                } = response;

                                await DatabaseClient.category.update({
                                    where: {
                                        id,
                                    },
                                    data: {
                                        products: api_products,
                                        product_count: api_products.length,
                                    },
                                });
                                console.log(
                                    `====SUCCESSFULLY WROTE PRODUCTS TO CATEGORY OF ID: ${id}; ${
                                        progress - allCategoryIdentifiers.length
                                    }/${progress} ====`
                                );

                                console.log("--SLEEPING...--");
                                await sleep(3000);
                                console.log("--WOKE UP...--");
                            })
                    ).then((results) => {
                        results.forEach((result) => {
                            if (result.status === "rejected") {
                                console.log(result);
                            }
                        });
                    });
                }
                return res.status(400).send("Please welcome.");
            } else {
                return res.status(400).send("Please fuck off.");
            }
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .send("Something went wrong when initializing!");
        }
    } else {
        return res.status(400).send("Error! Method wrong.");
    }
}
