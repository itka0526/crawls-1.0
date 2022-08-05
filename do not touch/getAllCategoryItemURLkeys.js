import GET_CATEGORY_ITEM_KEYS from "../queries/getAllCategoryURLkeys.gql.js";
import ApolloInstance from "./ApolloClient.js";

export default async function getAllCategoryURLkeys(variables) {
    const queryResult = await ApolloInstance.query({
        query: GET_CATEGORY_ITEM_KEYS,
        variables,
    });

    return queryResult;
}
