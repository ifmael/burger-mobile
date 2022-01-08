import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuStack from "components/navigation/MenuStack";
import Home from "components/screens/Home";

const Tab = createBottomTabNavigator();

// const screenOptionsTabBar = (xx) => ({
//     tabBarIcon: ({ /* focused, */ color, size }) => {
//         let component;

//         // if (route.name === "Home") {
//         //     component = <Icon color={color} name="hamburger" size={size} type="font-awesome-5" />;
//         // } else if (route.name === "Menu") {
//         //     component = <Icon color={color} name="align-justify" size={size} type="font-awesome-5" />;
//         // }

//         return component;
//     },
//     tabBarStyle: [
//         {
//             display: "flex",
//         },
//         null,
//     ],
//     // tabBarActiveTintColor: brown,
//     tabBarLabelStyle: {
//         fontSize: 12,
//         // fontFamily: defaultFont,
//     },
// });

export default function MenuTabs() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Menu" component={MenuStack} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}
