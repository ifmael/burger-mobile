import { createContext, useContext, ReactNode } from "react";
import { useRestaurantData, RestaurantData } from "@ifmael/burger-data";

import { useGlobalContext } from "../Global";

type RestaurantCtx = [RestaurantData | undefined, (idRestaurant: string) => void];

const RestaurantContext = createContext<RestaurantCtx | undefined>(undefined);

export default function RestaurantProvider({ children }: { children: ReactNode }) {
    const appData = useGlobalContext();
    const value = useRestaurantData(appData);

    return <RestaurantContext.Provider value={value}>{children}</RestaurantContext.Provider>;
}

export const useRestaurantContext = () => {
    const context = useContext(RestaurantContext);

    if (context === undefined) {
        throw new Error("useRestaurantContext must be used within a RestaurantProvider");
    }

    return context;
};
