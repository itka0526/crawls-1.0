import GET_CATEGORY_ID from "../queries/getCategoryIdFromURL.gql.js";
import ApolloInstance from "./ApolloClient.js";

export default async function getCategoryIdFromURL(url) {
    const queryResult = await ApolloInstance.query({
        query: GET_CATEGORY_ID,
        variables: { url: url },
    });

    return queryResult;
}
