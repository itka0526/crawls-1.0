import GET_CATEGORY_ITEMS from "../queries/getCategoryItems.gql";
import GET_ONLY_CATEGORY_ITEMS from "../queries/getOnlyCategoryItems.gql";
import ApolloInstance from "./ApolloClient.js";

export default async function getCategoryItems(variables, itemsOnly = false) {
    const queryResult = await ApolloInstance.query({
        query: itemsOnly ? GET_ONLY_CATEGORY_ITEMS : GET_CATEGORY_ITEMS,
        variables,
    });

    return queryResult;
}
