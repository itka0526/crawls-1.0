import selectAllCategoriesFunction from "../../lib/SQL generator functions/selectCategories/selectAllCategoriesFunction";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            //responding like this in order to keep the tree structure for menu
            //querying like findMany outputs all the results in a single array!
            const [results] = await selectAllCategoriesFunction(2);
            res.status(200).json(results || "No categories were found.");
        } catch (error) {
            console.error(error);
            res.status(500).send("Error! Fetching data failed.");
        }
    } else {
        res.status(500).send("Error! Method wrong! ");
    }
}
