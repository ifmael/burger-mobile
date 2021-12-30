import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Menu, Products } from "../../screens";

const Stack = createNativeStackNavigator();

export default function MenuStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MenuInside" component={Menu} options={{ title: "Nuestro menú" }} />
            <Stack.Screen name="Products" component={Products} initialParams={{ id: 1 }} />
        </Stack.Navigator>
    );
}
