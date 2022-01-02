import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { ApolloProvider } from "@apollo/client";
import GlobalProvider from "./src/context/Global";
import SafeAreaView from "./src/components/common/SafeAreaView";

// Navigation
import MainStack from "./src/components/navigation/MainStack";

import client from "./src/graphql/client";
import theme from "./src/styles";

export default function App() {
    return (
        <ApolloProvider client={client}>
            <GlobalProvider>
                <SafeAreaView>
                    <NativeBaseProvider theme={theme}>
                        <NavigationContainer>
                            <MainStack />
                        </NavigationContainer>
                    </NativeBaseProvider>
                </SafeAreaView>
            </GlobalProvider>
        </ApolloProvider>

        // </ApolloProvider>
    );
}
