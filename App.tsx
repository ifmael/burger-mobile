import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ApolloProvider } from "@apollo/client";

import client from "./src/graphql/client";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <View style={styles.container}>
                <Text>Open up App.tsx to start working on your app!</Text>
                <StatusBar style="auto" />
            </View>
        </ApolloProvider>
    );
}
