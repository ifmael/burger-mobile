import { useEffect, useState } from "react";

// Graphql
import { useAppDataQuery } from "../../graphql/models";

// Utils
import {
    convertCategory,
    convertBurger,
    convertItem,
    convertOption,
    convertRestaurant,
    convertSalad,
    convertSandwich,
    convertSide,
    convertSimpleModel,
} from "./Global.functions";

// Types
import { AppData } from "../../types";

const useAppData = () => {
    const { loading, error, data } = useAppDataQuery();
    const [appData, setAppData] = useState<AppData>();

    useEffect(() => {
        try {
            if (loading || !!error || !data) return;
            setAppData({
                beverages: convertSimpleModel(data.beverages),
                desserts: convertSimpleModel(data.desserts),
                salads: convertSalad(data.salads),
                sides: convertSide(data.sides),
                sandwiches: convertSandwich(data.sandwiches),
                burgers: convertBurger(data.burgers),
                items: convertItem(data.items),
                options: convertOption(data.options),
                restaurants: convertRestaurant(data.restaurants),
                categories: convertCategory(data.categories),
            });
        } catch (errorEffect) {
            console.warn(errorEffect);
        }
    }, [loading, error, data]);

    return { loading, error, appData };
};

export default useAppData;
