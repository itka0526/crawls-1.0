import getCategoryIdFromURL from "../../lib/getCategoryIdFromURL";
import getCategoryPaths from "../../lib/getCategoryPaths";
import getIncludeInTheMenu from "../../lib/getMenu/getIncludeInTheMenu";

export default async function handler(req, res) {
    const listOfCategories = await getIncludeInTheMenu(2);
    const paths = getCategoryPaths(listOfCategories, "category_id");

    // while (paths.length) {
    // const response = await Promise.all(
    const results = paths.splice(5).map(async ({ params: { category_id } }) => {
        const nominWeirdURLsuffix = ".html";
        const resolveURL = category_id.join("/") + nominWeirdURLsuffix;

        const category_id_data = await getCategoryIdFromURL(resolveURL);
        const {
            data: {
                urlResolver: { id: resolvedID },
            },
        } = category_id_data;

        return resolvedID;
    });
    res.json(results);
}
