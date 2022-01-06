import { createContext, useContext, ReactNode, useState } from "react";

import { useGlobalContext } from "../Global";

const RestaurantContext = createContext<any | undefined>(undefined);

export default function GlobalProvider({ children }: { children: ReactNode }) {
    const appData = useGlobalContext();
    const [productsRestaurant, setProductRestaurant] = useState();

    const filterProductForResturant = (idRestaurant: string) => {
        const { restaurants } = appData;
    };

    return <RestaurantContext.Provider value={productsRestaurant}>{children}</RestaurantContext.Provider>;
}

export const useRestaurantContext = () => {
    const context = useContext(RestaurantContext);

    if (context === undefined) {
        throw new Error("useRestaurantContext must be used within a GlobalContextProvider");
    }

    return context;
};
