import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import getConfigEnvironment from "config";

const { server, apiToken } = getConfigEnvironment();

const authLink = new ApolloLink((operation, forward) => {
    // Use the setContext method to set the HTTP headers.
    operation.setContext({
        headers: {
            authorization: `Bearer ${apiToken ?? ""}`,
        },
    });

    // Call the next link in the middleware chain.
    return forward(operation);
});

const httpLink = new HttpLink({
    uri: `${server ?? ""}/graphql`,
});
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
