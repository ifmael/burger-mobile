import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ShoppingCart, ProductDetail } from "components/screens";
import MenuTabs from "../MenuTabs";

const Stack = createNativeStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="HomeTab" component={MenuTabs} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen
                name="ShoppingCart"
                component={ShoppingCart}
                // options={{
                //     title: "Mi pedido",
                //     headerBackTitleVisible: false,
                //     headerShown: true,
                //     headerTintColor: menuStackStyles.headerTintColor,
                //     headerTitleStyle: menuStackStyles.headerTitleStyle,
                //     headerTitleAlign: "center",
                // }}
            />
        </Stack.Navigator>
    );
}
