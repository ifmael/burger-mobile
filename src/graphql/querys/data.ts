import { gql } from "@apollo/client";
import {
    beverages,
    burgers,
    desserts,
    options,
    salads,
    sandwiches,
    sides,
    ingredients,
    categories,
    restaurants,
    items,
} from "./content";

const FETCH_DATA = gql`
    query {
        ${beverages}
        ${burgers}
        ${desserts}
        ${options}
        ${salads}
        ${sandwiches}
        ${sides}
        ${ingredients}
        ${categories}
        ${restaurants}
        ${items}
    }
`;

export default FETCH_DATA;
