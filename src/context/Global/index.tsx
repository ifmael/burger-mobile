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
import InitialError from "../../components/common/ErrorFallback";

import useData from "./useData";
import { AppData } from "./Global.types";

type GlobalContextProviderProps = {
    children: ReactNode;
};

const GlobalContext = createContext<AppData | undefined>(undefined);

export default function GlobalProvider({ children }: GlobalContextProviderProps) {
    const [fontsLoaded] = useFonts({
        Comfortaa300,
        Comfortaa400,
        Comfortaa500,
        Comfortaa600,
        Comfortaa700,
    });
    const { loading, error, data } = useData();

    if (!fontsLoaded || loading) {
        return <AppLoading />;
    }
    if (error) {
        return <InitialError error={error} />;
    }

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    return <GlobalContext.Provider value={{ ...data }}>{children}</GlobalContext.Provider>;
}

export function useGlobalContext() {
    const context = useContext(GlobalContext);

    if (context === undefined) {
        throw new Error("useGlobalContext must be used within a GlobalContextProvider");
    }

    return context;
}
