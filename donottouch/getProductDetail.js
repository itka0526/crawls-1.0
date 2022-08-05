import GET_PRODUCT_DETAIL from "../queries/getProductDetail.gql.js";
import ApolloInstance from "./ApolloClient.js";

export default async function getProductDetail(urlKey) {
    const queryResult = await ApolloInstance.query({
        query: GET_PRODUCT_DETAIL,
        variables: { urlKey },
    });

    return queryResult;
}
