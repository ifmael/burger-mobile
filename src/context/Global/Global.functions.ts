import {
    BeverageApp,
    BeveragesQuery,
    BurgerApp,
    BurgerConfiguration,
    BurgerQuery,
    CategoryApp,
    CategoryQuery,
    DessertApp,
    DessertsQuery,
    ItemApp,
    ItemQuery,
    RestaurantApp,
    RestaurantsQuery,
    OptionApp,
    OptionQuery,
    SaladApp,
    SaladsQuery,
    SandwichApp,
    SandwichQuery,
    SideApp,
    SideConfiguration,
    SidesQuery,
    ComponentCommonRestaurant,
    PriceRestaurant,
    IngredientName,
} from "../../types";
import { BeverageEntity, IngredientEntity, ItemEntity, SideEntity } from "../../graphql/models";

type Schedule = {
    closing: string;
    opening: string;
    days: { day: string; key: number }[];
};

// ################  COMPONENTS  ################

const convertComponentRestaurant = (restaurants: ComponentCommonRestaurant): PriceRestaurant[] => {
    return (
        restaurants?.reduce((acc, currentValue) => {
            const restaurantId = currentValue?.restaurant?.data?.id ?? "";

            return currentValue && currentValue.available && restaurantId !== ""
                ? [...acc, { price: currentValue.price, restaurantId }]
                : acc;
        }, [] as PriceRestaurant[]) ?? []
    );
};

const convertComponentIngredientName = (ingredientRelationColleciton: IngredientEntity[]): IngredientName[] => {
    return (
        ingredientRelationColleciton?.reduce(
            (acc, ingredientValue) =>
                ingredientValue.id && ingredientValue.attributes?.name
                    ? [...acc, { id: ingredientValue.id, name: ingredientValue.attributes.name }]
                    : acc,
            [] as IngredientName[]
        ) ?? []
    );
};

// ################  MODELS  ################

export const convertRestaurant = (restaurantCollection: RestaurantsQuery): RestaurantApp[] => {
    let restaurants: RestaurantApp[] = [];
    if (restaurantCollection) {
        restaurants = restaurantCollection.data.map(({ id, attributes }) => {
            const postalCodes = attributes?.postalCodes
                ? attributes?.postalCodes?.reduce((acc, currentValue) => {
                      return currentValue ? [...acc, currentValue.key] : acc;
                  }, [] as number[])
                : [];
            const schedule = attributes?.schedule
                ? attributes?.schedule?.reduce((acc, currentValue) => {
                      const days =
                          currentValue?.days?.data?.reduce((accDays, { attributes: attributesDays }) => {
                              return attributesDays
                                  ? [...accDays, { key: attributesDays.key, day: attributesDays.day }]
                                  : accDays;
                          }, [] as { day: string; key: number }[]) ?? [];

                      return currentValue
                          ? [
                                ...acc,
                                {
                                    closing: currentValue.closing,
                                    opening: currentValue.opening,
                                    days,
                                },
                            ]
                          : acc;
                  }, [] as Schedule[])
                : [];

            const restaurant = {
                id: id ?? "",
                name: attributes?.name ?? "",
                address: attributes?.address ?? "",
                phone: attributes?.phone ?? "",
                moreOrders: !!attributes?.moreOrders,
                isClose: !!attributes?.isClose,
                postalCodes,
                schedule,
            };
            return restaurant;
        });
    }
    return restaurants;
};

export const convertSalad = (saladCollection: SaladsQuery): SaladApp[] => {
    let salads: SaladApp[] = [];

    if (saladCollection) {
        salads = saladCollection.data.map(({ id, attributes }) => {
            const restaurant = attributes?.restaurant
                ? convertComponentRestaurant(attributes.restaurant as ComponentCommonRestaurant)
                : [];

            const ingredients = attributes?.ingredients?.data
                ? convertComponentIngredientName(attributes.ingredients.data)
                : [];

            const salad = {
                id: id ?? "",
                name: attributes?.name ?? "",
                description: attributes?.description ?? "",
                position: attributes?.position ?? 0,
                ingredients,
                restaurant,
            };
            return salad;
        });
    }

    return salads;
};

export const convertSide = (sideCollection: SidesQuery): SideApp[] => {
    let sides: SideApp[] = [];

    if (sideCollection) {
        sides = sideCollection.data.map(({ id, attributes }) => {
            const restaurant = attributes?.restaurant
                ? convertComponentRestaurant(attributes.restaurant as ComponentCommonRestaurant)
                : [];

            const ingredients = attributes?.ingredients?.data
                ? convertComponentIngredientName(attributes.ingredients.data)
                : [];
            const sauces = attributes?.sauces?.data ? convertComponentIngredientName(attributes.sauces.data) : [];

            const side = {
                id: id ?? "",
                name: attributes?.name ?? "",
                description: attributes?.description ?? "",
                position: attributes?.position ?? 0,
                selectOneOption: !!attributes?.selectOneOption,
                isCustomizable: !!attributes?.isCustomizable,
                isSauce: !!attributes?.isSauce,
                restaurant,
                ingredients,
                sauces,
            };

            return side;
        });
    }

    return sides;
};

export const convertSandwich = (sandwichCollection: SandwichQuery): SandwichApp[] => {
    let sandwiches: SandwichApp[] = [];

    if (sandwichCollection) {
        sandwiches = sandwichCollection.data.map(({ id, attributes }) => {
            const ingredients = attributes?.ingredients?.data
                ? convertComponentIngredientName(attributes.ingredients.data)
                : [];

            // Configuration for each restaurant (price, available, beverages, sides and bread)
            const restaurant =
                attributes?.restaurants?.reduce((acc, restaurantConfig) => {
                    const breadOption = restaurantConfig?.bread?.data?.id ?? "";
                    const beverageOption = restaurantConfig?.beverage?.data?.id ?? "";
                    const sideOption = restaurantConfig?.side?.data?.id ?? "";
                    const restaurantId = restaurantConfig?.restaurant?.data?.id ?? "";
                    const price = restaurantConfig?.price ?? -1;

                    return restaurantConfig?.available && restaurantId !== ""
                        ? [...acc, { breadOption, beverageOption, sideOption, restaurantId, price }]
                        : acc;
                }, [] as (SideConfiguration & PriceRestaurant)[]) ?? [];

            const sandwich = {
                id: id ?? "",
                name: attributes?.name ?? "",
                description: attributes?.description ?? "",
                position: attributes?.position ?? 0,
                ingredients,
                restaurant,
            };

            return sandwich;
        });
    }

    return sandwiches;
};

export const convertBurger = (burgerCollection: BurgerQuery): BurgerApp[] => {
    let burgers: BurgerApp[] = [];

    if (burgerCollection) {
        burgers = burgerCollection.data.map(({ id, attributes }) => {
            const ingredients = attributes?.ingredients?.data
                ? convertComponentIngredientName(attributes.ingredients.data)
                : [];

            const restaurants =
                attributes?.restaurants?.reduce((acc, restaurantConfig) => {
                    const breadOption = restaurantConfig?.bread?.data?.id ?? "";
                    const beverageOption = restaurantConfig?.beverage?.data?.id ?? "";
                    const sideOption = restaurantConfig?.sides?.data?.id ?? "";
                    const restaurantId = restaurantConfig?.restaurant?.data?.id ?? "-1";
                    const price = restaurantConfig?.price ?? -1;
                    const meatOption = restaurantConfig?.meat?.data?.id ?? "";
                    const meatPointOption = restaurantConfig?.meatPoint?.data?.id ?? "";

                    return restaurantConfig?.available && restaurantId !== ""
                        ? [
                              ...acc,
                              {
                                  price,
                                  restaurantId,
                                  meatOption,
                                  meatPointOption,
                                  breadOption,
                                  beverageOption,
                                  sideOption,
                              },
                          ]
                        : acc;
                }, [] as (BurgerConfiguration & PriceRestaurant)[]) ?? [];

            const burger: BurgerApp = {
                id: id ?? "",
                name: attributes?.name ?? "",
                description: attributes?.description ?? "",
                isChildrenMenu: !!attributes?.isChildrenMenu,
                isYourTaste: !!attributes?.isYourTaste,
                position: attributes?.position ?? 0,
                ingredients,
                restaurants,
            };
            return burger;
        });
    }

    return burgers;
};

export const convertItem = (itemCollection: ItemQuery): ItemApp[] => {
    let items: ItemApp[] = [];

    if (itemCollection) {
        items = itemCollection.data.map(({ id, attributes }) => {
            const restaurant = attributes?.restaurant
                ? convertComponentRestaurant(attributes.restaurant as ComponentCommonRestaurant)
                : [];

            const item = {
                id: id ?? "",
                name: attributes?.name ?? "",
                restaurant,
            };

            return item;
        });
    }

    return items;
};

export const convertOption = (optionCollection: OptionQuery): OptionApp[] => {
    let options: OptionApp[] = [];
    if (optionCollection) {
        options = optionCollection.data.map(({ id, attributes }) => {
            function extractIds(acc: string[], currentEntity: ItemEntity | BeverageEntity | SideEntity): string[] {
                return currentEntity?.id ? [...acc, currentEntity?.id] : acc;
            }
            const items = attributes?.items?.data.reduce(extractIds, []) ?? [];
            const beverages = attributes?.beverages?.data.reduce(extractIds, []) ?? [];
            const sides = attributes?.sides?.data.reduce(extractIds, []) ?? [];

            const option = {
                id: id ?? "",
                name: attributes?.name ?? "",
                items,
                beverages,
                sides,
            };

            return option;
        });
    }

    return options;
};

export function convertSimpleModel(collection: BeveragesQuery): BeverageApp[];
export function convertSimpleModel(collection: DessertsQuery): DessertApp[];
export function convertSimpleModel(collection: BeveragesQuery | DessertsQuery): (BeverageApp | DessertApp)[] {
    let modelElements: (BeverageApp | DessertApp)[] = [];

    if (collection) {
        modelElements =
            collection.data.map(({ id, attributes }) => {
                const restaurant = attributes?.restaurant
                    ? convertComponentRestaurant(attributes.restaurant as ComponentCommonRestaurant)
                    : [];

                const element = {
                    id: id ?? "",
                    name: attributes?.name ?? "",
                    position: attributes?.position ?? 0,
                    restaurant,
                };

                return element;
            }) ?? [];
    }

    return modelElements;
}

export const convertCategory = (collectionCategory: CategoryQuery): CategoryApp[] => {
    let categories: CategoryApp[] = [];

    if (collectionCategory) {
        categories = collectionCategory.data.map(({ id, attributes }) => ({
            id: id ?? "",
            name: attributes?.name ?? "",
            position: attributes?.position ?? 0,
            asset: attributes?.asset ?? "",
        }));
    }

    return categories;
};
