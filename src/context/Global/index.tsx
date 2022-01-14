import { createContext, useContext, ReactNode } from "react";
import AppLoading from "expo-app-loading";

import {
    useFonts,
    Comfortaa_300Light as Comfortaa300,
    Comfortaa_400Regular as Comfortaa400,
    Comfortaa_500Medium as Comfortaa500,
    Comfortaa_600SemiBold as Comfortaa600,
    Comfortaa_700Bold as Comfortaa700,
} from "@expo-google-fonts/comfortaa";
import { useAppData, AppData } from "@ifmael/burger-data";
import InitialError from "components/common/ErrorFallback";

const GlobalContext = createContext<AppData | undefined>(undefined);

export default function GlobalProvider({ children }: { children: ReactNode }) {
    const [fontsLoaded] = useFonts({
        Comfortaa300,
        Comfortaa400,
        Comfortaa500,
        Comfortaa600,
        Comfortaa700,
    });
    const { loading, error, appData } = useAppData();

    if (error) {
        return <InitialError error={error} />;
    }

    if (!fontsLoaded || loading || !appData) {
        return <AppLoading />;
    }

    return <GlobalContext.Provider value={appData}>{children}</GlobalContext.Provider>;
}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);

    if (context === undefined) {
        throw new Error("useGlobalContext must be used within a GlobalContextProvider");
    }

    return context;
};
