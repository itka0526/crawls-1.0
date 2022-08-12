import DatabaseClient from "../../lib/DatabaseClient";
import getMenu from "../../lib/getMenu/getMenu";
import insertCategoriesFunction from "../../lib/SQL generator functions/insertCategories/insertCategoriesFunction.js";
import insertProductsFunction from "../../lib/SQL generator functions/insertProducts/insertProductsFunction";

export default async (req, res) => {
    if (req.method === "POST") {
        try {
            if (req.body.password === process.env.PASSWORD) {
                const results = await getMenu(2);
                await DatabaseClient.category.deleteMany();
                await insertCategoriesFunction(results.data);
                console.log("====SUCCESSFULLY WROTE CATEGORIES====\n");
                await insertProductsFunction();
                console.log("====SUCCESFULLY WROTE PRODUCTS  ====");
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
};
