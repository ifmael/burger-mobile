import {
    BeverageEntityResponseCollection,
    BurgerEntityResponseCollection,
    CategoryEntityResponseCollection,
    DessertEntityResponseCollection,
    IngredientEntityResponseCollection,
    ItemEntityResponseCollection,
    OptionEntityResponseCollection,
    RestaurantEntityResponseCollection,
    SaladEntityResponseCollection,
    SandwichEntityResponseCollection,
    SideEntityResponseCollection,
} from "../../graphql/models";

export type AppData = {
    bevergage?: BeverageEntityResponseCollection;
    burgers?: BurgerEntityResponseCollection;
    categories?: CategoryEntityResponseCollection;
    desserts?: DessertEntityResponseCollection;
    ingredients?: IngredientEntityResponseCollection;
    items?: ItemEntityResponseCollection;
    options?: OptionEntityResponseCollection;
    restaurants?: RestaurantEntityResponseCollection;
    salads?: SaladEntityResponseCollection;
    sandwiches?: SandwichEntityResponseCollection;
    sides?: SideEntityResponseCollection;
};
