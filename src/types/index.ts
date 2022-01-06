import {
    Restaurant as RestaurantAPI,
    Beverage as BeverageAPI,
    Dessert as DessertAPI,
    Salad as SaladAPI,
    Side as SideAPI,
    Sandwich as SandwichAPI,
    Burger as BurgerAPI,
    Item as ItemAPI,
    Option as OptionAPI,
    Category as CategoryAPI,
    Ingredient as IngredientAPI,
    AppDataQuery,
} from "../graphql/models";

export type UndefinedNull = undefined | null;

export interface Config {
    server: string | UndefinedNull;
    apiToken: string | UndefinedNull;
}

//  ############### Utils ###############
type Merge<A, B> = {
    [K in keyof A]: K extends keyof B ? B[K] : A[K];
} & B;

//  ############### Model App Configuration ###############

export type PriceRestaurant = { price: number; restaurantId: string };
export type IngredientName = { id: string; name: string };
export type SideConfiguration = {
    breadOption: string;
    beverageOption: string;
    sideOption: string;
};
export type BurgerConfiguration = {
    meatOption: string;
    meatPointOption: string;
    breadOption: string;
    beverageOption: string;
    sideOption: string;
};

//  ############### Components ###############

export type ComponentCommonRestaurant =
    | {
          price: number;
          available: boolean;
          restaurant?:
              | {
                    data?:
                        | {
                              id?: string | null | undefined;
                          }
                        | null
                        | undefined;
                }
              | null
              | undefined;
      }[]
    | null
    | undefined;

// ###############  Models APP ###############

export type RestaurantApp = Omit<RestaurantAPI, "schedule" | "postalCodes"> & {
    id: string;
    schedule: {
        closing: string;
        opening: string;
        days: { day: string; key: number }[];
    }[];
    postalCodes: number[];
};

export type BeverageApp = Omit<BeverageAPI, "restaurant"> & {
    id: string;
    restaurant: PriceRestaurant[];
};

export type DessertApp = Omit<DessertAPI, "restaurant"> & {
    id: string;
    restaurant: PriceRestaurant[];
};

export type SaladApp = Omit<SaladAPI, "restaurant" | "ingredients"> & {
    id: string;
    restaurant: PriceRestaurant[];
    ingredients: IngredientName[];
};

export type SideApp = Omit<SideAPI, "restaurant" | "ingredients" | "sauces"> & {
    id: string;
    restaurant: PriceRestaurant[];
    ingredients: IngredientName[];
    sauces: IngredientName[];
};

export type SandwichApp = Omit<SandwichAPI, "restaurant" | "ingredients"> & {
    id: string;
    ingredients: IngredientName[];
    restaurant: (SideConfiguration & PriceRestaurant)[];
};

export type BurgerApp = Omit<BurgerAPI, "restaurants" | "ingredients"> & {
    id: string;
    ingredients: IngredientName[];
    restaurants: (BurgerConfiguration & PriceRestaurant)[];
};

export type ItemApp = Omit<ItemAPI, "restaurant"> & {
    id: string;
    restaurant: PriceRestaurant[];
};

export type OptionApp = Omit<OptionAPI, "items" | "beverages" | "sides"> & {
    id: string;
    items?: string[];
    beverages?: string[];
    sides: string[];
};

export type CategoryApp = CategoryAPI & {
    id: string;
};

export type IngredientApp = Omit<IngredientAPI, "restaurant"> & {
    id: string;
    restaurant: PriceRestaurant[];
};

export type AppData = {
    restaurants: RestaurantApp[];
    beverages: BeverageApp[];
    desserts: DessertApp[];
    salads: SaladApp[];
    sides: SideApp[];
    sandwiches: SandwichApp[];
    burgers: BurgerApp[];
    items: ItemApp[];
    options: OptionApp[];
    categories: CategoryApp[];
    ingredients: IngredientApp[];
};

// Apollo Query
export type RestaurantsQuery = AppDataQuery["restaurants"];
export type BeveragesQuery = AppDataQuery["beverages"];
export type DessertsQuery = AppDataQuery["desserts"];
export type SaladsQuery = AppDataQuery["salads"];
export type SidesQuery = AppDataQuery["sides"];
export type SandwichQuery = AppDataQuery["sandwiches"];
export type BurgerQuery = AppDataQuery["burgers"];
export type ItemQuery = AppDataQuery["items"];
export type OptionQuery = AppDataQuery["options"];
export type CategoryQuery = AppDataQuery["categories"];
export type IngredientQuery = AppDataQuery["ingredients"];
