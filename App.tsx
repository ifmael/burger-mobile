import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { ApolloProvider } from "@apollo/client";
import SafeAreaView from "components/common/SafeAreaView";
import GlobalProvider from "context/Global";
import RestaurantProvider from "context/Restaurant";

// Navigation
import MainStack from "./src/components/navigation/MainStack";

import client from "./src/graphql/client";
import theme from "./src/styles";

export default function App() {
    return (
        <ApolloProvider client={client}>
            <GlobalProvider>
                <RestaurantProvider>
                    <SafeAreaView>
                        <NativeBaseProvider theme={theme}>
                            <NavigationContainer>
                                <MainStack />
                            </NavigationContainer>
                        </NativeBaseProvider>
                    </SafeAreaView>
                </RestaurantProvider>
            </GlobalProvider>
        </ApolloProvider>
    );
}
