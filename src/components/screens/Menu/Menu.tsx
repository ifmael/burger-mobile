import { View, Button, Text } from "react-native";
import { MenuProps } from "../../navigation/navigation.types";

export default function Menu({ navigation }: MenuProps) {
    return (
        <View>
            <Text>Menu</Text>
            <Button title="Ir a detalles" onPress={() => navigation.navigate("Product", { id: 5 })} />
        </View>
    );
}
