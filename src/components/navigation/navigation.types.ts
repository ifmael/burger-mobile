import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    MenuInside: undefined;
    Product: { id: number };
};

export type ProductPops = NativeStackScreenProps<RootStackParamList, "Product">;

export type MenuProps = NativeStackScreenProps<RootStackParamList, "MenuInside">;
