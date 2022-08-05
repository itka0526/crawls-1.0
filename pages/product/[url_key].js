// import getProductDetail from "../../lib/getProductDetail";
import getIncludeInTheMenu from "../../lib/getMenu/getIncludeInTheMenu";
import getCategoryPaths from "../../lib/getCategoryPaths";
import getCategoryIdFromURL from "../../lib/getCategoryIdFromURL";
import getCategoryItemPaths from "../../lib/getCategoryItemPaths";
// import getAllCategoryURLkeys from "../../lib/getAllCategoryItemURLkeys";

import path from "path";
import { promises as fs } from "fs";

import getCategoryItemData from "../../lib/getCategoryItemData";
import ProductDetailLeftSide from "../../components/ProductDetail/ProductDetailLeftSide";
import ProductDetailRightSide from "../../components/ProductDetail/ProductDetailRightSide";
import getCategoryItems from "../../lib/getCategoryItems";

export default function ProductDetail({ results }) {
    return (
        <div className="grid h-[calc(100vh-4rem)] w-screen grid-cols-2 gap-4 px-4 py-8 max-md:grid-cols-1 max-md:grid-rows-[60%,auto] max-md:overflow-y-auto">
            <ProductDetailLeftSide results={results} />
            <ProductDetailRightSide results={results} />
        </div>
    );
}

export async function getStaticPaths() {
    // const listOfCategories = await getIncludeInTheMenu(2);
    // const categoryPaths = getCategoryPaths(listOfCategories, "category_id");
    // const categoryIdentifiers = await Promise.all(
    //     categoryPaths.map(async (category_complete_url_path) => {
    //         const {
    //             params: { category_id },
    //         } = category_complete_url_path;
    //         const nominWeirdURLsuffix = ".html";
    //         const resolveURL = category_id.join("/") + nominWeirdURLsuffix;
    //         return await getCategoryIdFromURL(resolveURL);
    //     })
    // );
    // const allCategoryItemData = await Promise.all(
    //     categoryIdentifiers.map(async (category_id, index) => {
    //         const {
    //             data: {
    //                 urlResolver: { id: resolvedID },
    //             },
    //         } = category_id;
    //         const variables = {
    //             currentPage: 1,
    //             filters: {
    //                 category_id: {
    //                     eq: `${resolvedID}`,
    //                 },
    //             },
    //             pageSize: 50,
    //         };
    //         console.log(`fetching: ${index}`);
    //         return await getCategoryItems(variables, true);
    //     })
    // );

    // await fs.writeFile(
    //     path.join(process.cwd(), "temporaryjsoncontainer.json"),
    //     JSON.stringify(allCategoryItemData)
    // );

    // const paths = getCategoryItemPaths(allCategoryItemData, "url_key");

    // console.log(paths);

    const buffer = await fs.readFile(
        path.join(process.cwd(), "allCategoryItemData.json")
    );

    const paths = JSON.parse(buffer);

    return { paths, fallback: false };
}

export async function getStaticProps({ params: { url_key } }) {
    const cachedAllCategoryItemData = await fs.readFile(
        path.join(process.cwd(), "allCategoryItemData.json")
    );
    const parsedCachedAllCategoryItemData = JSON.parse(
        cachedAllCategoryItemData
    );
    const listOfProducts = getCategoryItemData(parsedCachedAllCategoryItemData);

    const results = listOfProducts.filter(
        ({ url_key: url_key_two }) => url_key === url_key_two
    )[0];

    return {
        props: { results },
    };
}

//FOR PRODUCTION ONLY !!!
// VERY EXPENSIVE QUERY
// const allCategoryItemURLkeys = await Promise.all(
//     categoryIdentifiers.map(async (category_id) => {
//         const {
//             data: {
//                 urlResolver: { id: resolvedID },
//             },
//         } = category_id;
//         const variables = {
//             currentPage: 1,
//             filters: {
//                 category_id: {
//                     eq: `${resolvedID}`,
//                 },
//             },
//             pageSize: 50,
//         };
//         return await getAllCategoryURLkeys(variables);
//     })
// );
// const formatted = allCategoryItemURLkeys
//     .map((categoryData) => {
//         const {
//             data: {
//                 products: { items },
//             },
//         } = categoryData;
//         return items.map((item) => item.url_key);
//     })
//     .reduce((collector, setOfURLkeys) => [...collector, ...setOfURLkeys]);
