import { View, Button, Text } from "react-native";
import { MenuProps } from "../../navigation/navigation.types";

import { useGlobalContext } from "../../../context/Global";

export default function Menu({ navigation }: MenuProps) {
    const data = useGlobalContext();

    return (
        <View>
            <Text>Menu</Text>
            <Button title="Ir a detalles" onPress={() => navigation.navigate("Product", { id: 5 })} />
        </View>
    );
}
