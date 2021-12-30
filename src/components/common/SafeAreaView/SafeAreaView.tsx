import { ReactNode } from "react";
import { SafeAreaView as SafeAreaViewNative, StyleSheet, StatusBar, Platform } from "react-native";

const white = "#fff";

const styles = StyleSheet.create({
    androidSafeArea: {
        backgroundColor: white,
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});

type SafeAreaViewProps = {
    children: ReactNode;
};
export default function SafeAreaView({ children }: SafeAreaViewProps) {
    return <SafeAreaViewNative style={styles.androidSafeArea}>{children}</SafeAreaViewNative>;
}
