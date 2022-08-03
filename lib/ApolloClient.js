import { ApolloClient, InMemoryCache } from "@apollo/client";

const ApolloInstance = new ApolloClient({
    uri: "https://nomin.mn/graphql/",
    cache: new InMemoryCache(),
});

export default ApolloInstance;
