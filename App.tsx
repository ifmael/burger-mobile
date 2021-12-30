// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SafeAreaView from "./src/components/common/SafeAreaView";

// Navigation
import MainStack from "./src/components/navigation/MainStack";
// Graphql
// import { ApolloProvider } from "@apollo/client";
// import client from "./src/graphql/client";

export default function App() {
    return (
        <SafeAreaView>
            <NavigationContainer>
                <MainStack />
            </NavigationContainer>
        </SafeAreaView>

        // <ApolloProvider client={client}>
        //     <View style={styles.container}>
        //         <Text>Open up App.tsx to start working on your app!</Text>
        //         <StatusBar style="auto" />
        //     </View>
        // </ApolloProvider>
    );
}
