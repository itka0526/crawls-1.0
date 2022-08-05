import { gql } from "@apollo/client";

export default gql`
    query getOverviewDataBySku($sku: String!) {
        getOverviewData(sku: $sku) {
            model
        }
    }
`;
