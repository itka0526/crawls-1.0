import { gql } from "@apollo/client";

export default gql`
    query ResolveURL($url: String!) {
        urlResolver(url: $url) {
            type
            id
            relative_url
            redirectCode
        }
    }
`;
