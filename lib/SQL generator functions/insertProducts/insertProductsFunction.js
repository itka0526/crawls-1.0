import DatabaseClient from "../../DatabaseClient";
import getCategoryItems from "../../getCategoryItems";

const insertProductsFunction = async function () {
    //MUST BE CALLED AFTER insertCategoriesFunction
    const allCategoryIdentifiers = await DatabaseClient.category.findMany({
        select: {
            id: true,
        },
    });
    const progress = allCategoryIdentifiers.slice().length;

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    while (allCategoryIdentifiers.length) {
        await Promise.allSettled(
            allCategoryIdentifiers.splice(0, 25).map(async ({ id }) => {
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
};

export default insertProductsFunction;
