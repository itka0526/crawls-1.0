import { gql } from "@apollo/client";

export default gql`
    query category(
        $pageSize: Int!
        $currentPage: Int!
        $filters: ProductAttributeFilterInput!
        $sort: ProductAttributeSortInput
    ) {
        products(
            pageSize: $pageSize
            currentPage: $currentPage
            filter: $filters
            sort: $sort
        ) {
            items {
                id
                name
                short_description {
                    html
                }
                url_key
            }
        }
    }
`;
