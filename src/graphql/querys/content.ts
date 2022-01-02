export const beverages = `
    beverages {
        data {
            id
            attributes {
                name
                position
                restaurant {
                    price
                    available
                    restaurant{
                        data{
                            id
                        }
                    }
                }
            }
        }
    }`;

export const burgers = `
    burgers {
        data {
            id
            attributes {
                name
                position
                restaurants{
                    restaurant{
                        data{
                            id
                        }
                    }
                    meat{
                        data{
                            id
                        }
                    }
                    meatPoint{
                        data{
                            id
                        }
                    }
                    bread{
                        data{
                            id
                        }
                    }
                    beverage{
                        data {
                            id
                        }
                    }
                    sides{
                        data{
                            id
                        }
                    }
                }
            }
        }
    }`;

export const desserts = `
    desserts {
        data {
            id
            attributes {
                name
                position
                restaurant {
                    price
                    available
                    restaurant{
                    data {
                        id
                        }
                    }
                }
            }
        }
    }`;

export const options = `
    options{
        data{
            id
            attributes{
                name
                items{
                    data{
                        id
                    }
                }
                beverages{
                    data{
                        id
                    }
                }
                sides{
                    data{
                        id
                    }
                }
            }
        }
	}`;

export const salads = `
    salads {
        data {
            id
            attributes {
                name
                position
                description
                ingredients{
                    data{
                        id
                    }
                }
                restaurant {
                    price
                    available
                    restaurant{
                    data {
                        id
                        }
                    }
                }
            }
        }
    }`;

export const sandwiches = `
    sandwiches {
        data {
            id
            attributes {
                name
                description
                ingredients {
                    data {
                        id
                    }
                }
                position
                restaurants{
                    available
                    price
                    restaurant{
                        data{
                            id
                        }
                    }
                }
            }
        }
    }`;

export const sides = `
    sides {
        data {
            id
            attributes {
                name
                description
                position
                isCustomizable
                selectOneOption
                ingredients {
                    data {
                        id
                    }
                }
                sauces {
                    data {
                        id
                    }
                }
                restaurant{
                    price
                    available
                    restaurant{
                        data{
                            id
                        }
                    }
                }
            }
        }
    }`;

export const ingredients = `
    ingredients{
        data{
            id
            attributes{
                name
                inBurger
                inSandwich
                inSalad
                restaurants{
                    price
                    restaurant{
                        data{
                            id
                        }
                    }
                }
            }
        }
    }`;

export const categories = `
    categories {
        data{
            id
            attributes{
                name
                position
                asset
            }
        }
    }`;

export const restaurants = `
    restaurants {
        data {
            id
            attributes {
                name
                address
                phone
                moreOrders
                isClose
                postalCodes{
                    key
                }
                schedule {
                    opening
                    opening
                    days {
                        data {
                            attributes {
                                key
                                day
                            }
                        }
                    }
                }
            }
        }
    }`;

export const items = `
    items {
        data {
            id
            attributes {
                name
                restaurant {
                    price
                    restaurant {
                        data {
                            id
                        }
                    }
                }
            }
        }
    }`;
