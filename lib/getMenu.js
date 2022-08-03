import GET_CATEGORY_LIST from "../queries/getCategoryList.gql.js";
import ApolloInstance from "./ApolloClient.js";

export default async function getMenu(id) {
    const queryResult = await ApolloInstance.query({
        query: GET_CATEGORY_LIST,
        variables: { id },
    });

    return queryResult;
}
