import GET_CATEGORY_ITEMS from "../queries/getCategoryItems.gql";
import ApolloInstance from "./ApolloClient.js";

export default async function getCategoryItems(variables) {
    const queryResult = await ApolloInstance.query({
        query: GET_CATEGORY_ITEMS,
        variables,
    });

    return queryResult;
}
