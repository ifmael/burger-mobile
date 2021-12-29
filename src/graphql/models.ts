import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  OptionElementsDynamicZoneInput: any;
  RestaurantSchuduleDynamicZoneInput: any;
  /** A time string with format HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Beverage = {
  __typename?: 'Beverage';
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  position: Scalars['Int'];
  price: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BeverageEntity = {
  __typename?: 'BeverageEntity';
  attributes?: Maybe<Beverage>;
  id?: Maybe<Scalars['ID']>;
};

export type BeverageEntityResponse = {
  __typename?: 'BeverageEntityResponse';
  data?: Maybe<BeverageEntity>;
};

export type BeverageEntityResponseCollection = {
  __typename?: 'BeverageEntityResponseCollection';
  data: Array<BeverageEntity>;
  meta: ResponseCollectionMeta;
};

export type BeverageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BeverageFiltersInput>>>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<BeverageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BeverageFiltersInput>>>;
  position?: InputMaybe<IntFilterInput>;
  price?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BeverageInput = {
  category?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Burger = {
  __typename?: 'Burger';
  beverage?: Maybe<OptionEntityResponse>;
  bread?: Maybe<OptionEntityResponse>;
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  ingredients?: Maybe<IngredientRelationResponseCollection>;
  isChildrenMenu?: Maybe<Scalars['Boolean']>;
  isYourTaste?: Maybe<Scalars['Boolean']>;
  meat?: Maybe<OptionEntityResponse>;
  meatPoint?: Maybe<OptionEntityResponse>;
  name: Scalars['String'];
  position: Scalars['Int'];
  price: Scalars['Float'];
  side?: Maybe<OptionEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type BurgerIngredientsArgs = {
  filters?: InputMaybe<IngredientFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BurgerEntity = {
  __typename?: 'BurgerEntity';
  attributes?: Maybe<Burger>;
  id?: Maybe<Scalars['ID']>;
};

export type BurgerEntityResponse = {
  __typename?: 'BurgerEntityResponse';
  data?: Maybe<BurgerEntity>;
};

export type BurgerEntityResponseCollection = {
  __typename?: 'BurgerEntityResponseCollection';
  data: Array<BurgerEntity>;
  meta: ResponseCollectionMeta;
};

export type BurgerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BurgerFiltersInput>>>;
  beverage?: InputMaybe<OptionFiltersInput>;
  bread?: InputMaybe<OptionFiltersInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  ingredients?: InputMaybe<IngredientFiltersInput>;
  isChildrenMenu?: InputMaybe<BooleanFilterInput>;
  isYourTaste?: InputMaybe<BooleanFilterInput>;
  meat?: InputMaybe<OptionFiltersInput>;
  meatPoint?: InputMaybe<OptionFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<BurgerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BurgerFiltersInput>>>;
  position?: InputMaybe<IntFilterInput>;
  price?: InputMaybe<FloatFilterInput>;
  side?: InputMaybe<OptionFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BurgerInput = {
  beverage?: InputMaybe<Scalars['ID']>;
  bread?: InputMaybe<Scalars['ID']>;
  category?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isChildrenMenu?: InputMaybe<Scalars['Boolean']>;
  isYourTaste?: InputMaybe<Scalars['Boolean']>;
  meat?: InputMaybe<Scalars['ID']>;
  meatPoint?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Float']>;
  side?: InputMaybe<Scalars['ID']>;
};

export type BurgerRelationResponseCollection = {
  __typename?: 'BurgerRelationResponseCollection';
  data: Array<BurgerEntity>;
};

export type Category = {
  __typename?: 'Category';
  asset?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  image?: Maybe<UploadFileEntityResponse>;
  name: Scalars['String'];
  position: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  asset?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  position?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  asset?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
};

export type ComponentBurguerMeats = {
  __typename?: 'ComponentBurguerMeats';
  id: Scalars['ID'];
  ingredients?: Maybe<IngredientRelationResponseCollection>;
};


export type ComponentBurguerMeatsIngredientsArgs = {
  filters?: InputMaybe<IngredientFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentBurguerPointCooking = {
  __typename?: 'ComponentBurguerPointCooking';
  data?: Maybe<ItemRelationResponseCollection>;
  id: Scalars['ID'];
};


export type ComponentBurguerPointCookingDataArgs = {
  filters?: InputMaybe<ItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentCommonBread = {
  __typename?: 'ComponentCommonBread';
  data?: Maybe<ItemRelationResponseCollection>;
  id: Scalars['ID'];
};


export type ComponentCommonBreadDataArgs = {
  filters?: InputMaybe<ItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentMenuBeverage = {
  __typename?: 'ComponentMenuBeverage';
  id: Scalars['ID'];
  items?: Maybe<Array<Maybe<ComponentMenuBeverateItem>>>;
};


export type ComponentMenuBeverageItemsArgs = {
  filters?: InputMaybe<ComponentMenuBeverateItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentMenuBeverateItem = {
  __typename?: 'ComponentMenuBeverateItem';
  beverage?: Maybe<BeverageEntityResponse>;
  id: Scalars['ID'];
};

export type ComponentMenuBeverateItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMenuBeverateItemFiltersInput>>>;
  beverage?: InputMaybe<BeverageFiltersInput>;
  not?: InputMaybe<ComponentMenuBeverateItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMenuBeverateItemFiltersInput>>>;
};

export type ComponentMenuSide = {
  __typename?: 'ComponentMenuSide';
  id: Scalars['ID'];
  items?: Maybe<Array<Maybe<ComponentMenuSideItem>>>;
};


export type ComponentMenuSideItemsArgs = {
  filters?: InputMaybe<ComponentMenuSideItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentMenuSideItem = {
  __typename?: 'ComponentMenuSideItem';
  id: Scalars['ID'];
  side?: Maybe<SideEntityResponse>;
};

export type ComponentMenuSideItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMenuSideItemFiltersInput>>>;
  not?: InputMaybe<ComponentMenuSideItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMenuSideItemFiltersInput>>>;
  side?: InputMaybe<SideFiltersInput>;
};

export type ComponentRestaurantSchedule = {
  __typename?: 'ComponentRestaurantSchedule';
  closing: Scalars['Time'];
  days?: Maybe<DayRelationResponseCollection>;
  id: Scalars['ID'];
  opening: Scalars['Time'];
};


export type ComponentRestaurantScheduleDaysArgs = {
  filters?: InputMaybe<DayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type Day = {
  __typename?: 'Day';
  createdAt?: Maybe<Scalars['DateTime']>;
  day: Scalars['String'];
  key: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DayEntity = {
  __typename?: 'DayEntity';
  attributes?: Maybe<Day>;
  id?: Maybe<Scalars['ID']>;
};

export type DayEntityResponse = {
  __typename?: 'DayEntityResponse';
  data?: Maybe<DayEntity>;
};

export type DayEntityResponseCollection = {
  __typename?: 'DayEntityResponseCollection';
  data: Array<DayEntity>;
  meta: ResponseCollectionMeta;
};

export type DayFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DayFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  day?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  key?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<DayFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DayFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DayInput = {
  day?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['Int']>;
};

export type DayRelationResponseCollection = {
  __typename?: 'DayRelationResponseCollection';
  data: Array<DayEntity>;
};

export type Dessert = {
  __typename?: 'Dessert';
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  position: Scalars['Int'];
  price: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DessertEntity = {
  __typename?: 'DessertEntity';
  attributes?: Maybe<Dessert>;
  id?: Maybe<Scalars['ID']>;
};

export type DessertEntityResponse = {
  __typename?: 'DessertEntityResponse';
  data?: Maybe<DessertEntity>;
};

export type DessertEntityResponseCollection = {
  __typename?: 'DessertEntityResponseCollection';
  data: Array<DessertEntity>;
  meta: ResponseCollectionMeta;
};

export type DessertFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DessertFiltersInput>>>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<DessertFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DessertFiltersInput>>>;
  position?: InputMaybe<IntFilterInput>;
  price?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DessertInput = {
  category?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = Beverage | Burger | Category | ComponentBurguerMeats | ComponentBurguerPointCooking | ComponentCommonBread | ComponentMenuBeverage | ComponentMenuBeverateItem | ComponentMenuSide | ComponentMenuSideItem | ComponentRestaurantSchedule | Day | Dessert | I18NLocale | Ingredient | Item | Option | Restaurant | Salad | Sandwich | Side | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type Ingredient = {
  __typename?: 'Ingredient';
  burgers?: Maybe<BurgerRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  inBurger: Scalars['Boolean'];
  inSalad: Scalars['Boolean'];
  inSandwich: Scalars['Boolean'];
  name: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
  salads?: Maybe<SaladRelationResponseCollection>;
  sandwiches?: Maybe<SandwichRelationResponseCollection>;
  side?: Maybe<SideEntityResponse>;
  side_ingredients?: Maybe<SideEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type IngredientBurgersArgs = {
  filters?: InputMaybe<BurgerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IngredientSaladsArgs = {
  filters?: InputMaybe<SaladFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IngredientSandwichesArgs = {
  filters?: InputMaybe<SandwichFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IngredientEntity = {
  __typename?: 'IngredientEntity';
  attributes?: Maybe<Ingredient>;
  id?: Maybe<Scalars['ID']>;
};

export type IngredientEntityResponse = {
  __typename?: 'IngredientEntityResponse';
  data?: Maybe<IngredientEntity>;
};

export type IngredientEntityResponseCollection = {
  __typename?: 'IngredientEntityResponseCollection';
  data: Array<IngredientEntity>;
  meta: ResponseCollectionMeta;
};

export type IngredientFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IngredientFiltersInput>>>;
  burgers?: InputMaybe<BurgerFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  inBurger?: InputMaybe<BooleanFilterInput>;
  inSalad?: InputMaybe<BooleanFilterInput>;
  inSandwich?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<IngredientFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IngredientFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
  salads?: InputMaybe<SaladFiltersInput>;
  sandwiches?: InputMaybe<SandwichFiltersInput>;
  side?: InputMaybe<SideFiltersInput>;
  side_ingredients?: InputMaybe<SideFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IngredientInput = {
  burgers?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  inBurger?: InputMaybe<Scalars['Boolean']>;
  inSalad?: InputMaybe<Scalars['Boolean']>;
  inSandwich?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  salads?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sandwiches?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  side?: InputMaybe<Scalars['ID']>;
  side_ingredients?: InputMaybe<Scalars['ID']>;
};

export type IngredientRelationResponseCollection = {
  __typename?: 'IngredientRelationResponseCollection';
  data: Array<IngredientEntity>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type Item = {
  __typename?: 'Item';
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ItemEntity = {
  __typename?: 'ItemEntity';
  attributes?: Maybe<Item>;
  id?: Maybe<Scalars['ID']>;
};

export type ItemEntityResponse = {
  __typename?: 'ItemEntityResponse';
  data?: Maybe<ItemEntity>;
};

export type ItemEntityResponseCollection = {
  __typename?: 'ItemEntityResponseCollection';
  data: Array<ItemEntity>;
  meta: ResponseCollectionMeta;
};

export type ItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ItemFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ItemFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ItemInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type ItemRelationResponseCollection = {
  __typename?: 'ItemRelationResponseCollection';
  data: Array<ItemEntity>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBeverage?: Maybe<BeverageEntityResponse>;
  createBurger?: Maybe<BurgerEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createDay?: Maybe<DayEntityResponse>;
  createDessert?: Maybe<DessertEntityResponse>;
  createIngredient?: Maybe<IngredientEntityResponse>;
  createItem?: Maybe<ItemEntityResponse>;
  createOption?: Maybe<OptionEntityResponse>;
  createSalad?: Maybe<SaladEntityResponse>;
  createSandwich?: Maybe<SandwichEntityResponse>;
  createSide?: Maybe<SideEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteBeverage?: Maybe<BeverageEntityResponse>;
  deleteBurger?: Maybe<BurgerEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteDay?: Maybe<DayEntityResponse>;
  deleteDessert?: Maybe<DessertEntityResponse>;
  deleteIngredient?: Maybe<IngredientEntityResponse>;
  deleteItem?: Maybe<ItemEntityResponse>;
  deleteOption?: Maybe<OptionEntityResponse>;
  deleteRestaurant?: Maybe<RestaurantEntityResponse>;
  deleteSalad?: Maybe<SaladEntityResponse>;
  deleteSandwich?: Maybe<SandwichEntityResponse>;
  deleteSide?: Maybe<SideEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateBeverage?: Maybe<BeverageEntityResponse>;
  updateBurger?: Maybe<BurgerEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateDay?: Maybe<DayEntityResponse>;
  updateDessert?: Maybe<DessertEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateIngredient?: Maybe<IngredientEntityResponse>;
  updateItem?: Maybe<ItemEntityResponse>;
  updateOption?: Maybe<OptionEntityResponse>;
  updateRestaurant?: Maybe<RestaurantEntityResponse>;
  updateSalad?: Maybe<SaladEntityResponse>;
  updateSandwich?: Maybe<SandwichEntityResponse>;
  updateSide?: Maybe<SideEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreateBeverageArgs = {
  data: BeverageInput;
};


export type MutationCreateBurgerArgs = {
  data: BurgerInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateDayArgs = {
  data: DayInput;
};


export type MutationCreateDessertArgs = {
  data: DessertInput;
};


export type MutationCreateIngredientArgs = {
  data: IngredientInput;
};


export type MutationCreateItemArgs = {
  data: ItemInput;
};


export type MutationCreateOptionArgs = {
  data: OptionInput;
};


export type MutationCreateSaladArgs = {
  data: SaladInput;
};


export type MutationCreateSandwichArgs = {
  data: SandwichInput;
};


export type MutationCreateSideArgs = {
  data: SideInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteBeverageArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBurgerArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDayArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDessertArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteIngredientArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOptionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSaladArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSandwichArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSideArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateBeverageArgs = {
  data: BeverageInput;
  id: Scalars['ID'];
};


export type MutationUpdateBurgerArgs = {
  data: BurgerInput;
  id: Scalars['ID'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateDayArgs = {
  data: DayInput;
  id: Scalars['ID'];
};


export type MutationUpdateDessertArgs = {
  data: DessertInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateIngredientArgs = {
  data: IngredientInput;
  id: Scalars['ID'];
};


export type MutationUpdateItemArgs = {
  data: ItemInput;
  id: Scalars['ID'];
};


export type MutationUpdateOptionArgs = {
  data: OptionInput;
  id: Scalars['ID'];
};


export type MutationUpdateRestaurantArgs = {
  data: RestaurantInput;
};


export type MutationUpdateSaladArgs = {
  data: SaladInput;
  id: Scalars['ID'];
};


export type MutationUpdateSandwichArgs = {
  data: SandwichInput;
  id: Scalars['ID'];
};


export type MutationUpdateSideArgs = {
  data: SideInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Option = {
  __typename?: 'Option';
  createdAt?: Maybe<Scalars['DateTime']>;
  elements?: Maybe<Array<Maybe<OptionElementsDynamicZone>>>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OptionElementsDynamicZone = ComponentBurguerMeats | ComponentBurguerPointCooking | ComponentCommonBread | ComponentMenuBeverage | ComponentMenuSide | Error;

export type OptionEntity = {
  __typename?: 'OptionEntity';
  attributes?: Maybe<Option>;
  id?: Maybe<Scalars['ID']>;
};

export type OptionEntityResponse = {
  __typename?: 'OptionEntityResponse';
  data?: Maybe<OptionEntity>;
};

export type OptionEntityResponseCollection = {
  __typename?: 'OptionEntityResponseCollection';
  data: Array<OptionEntity>;
  meta: ResponseCollectionMeta;
};

export type OptionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OptionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<OptionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OptionFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type OptionInput = {
  elements?: InputMaybe<Array<Scalars['OptionElementsDynamicZoneInput']>>;
  name?: InputMaybe<Scalars['String']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  beverage?: Maybe<BeverageEntityResponse>;
  beverages?: Maybe<BeverageEntityResponseCollection>;
  burger?: Maybe<BurgerEntityResponse>;
  burgers?: Maybe<BurgerEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  day?: Maybe<DayEntityResponse>;
  days?: Maybe<DayEntityResponseCollection>;
  dessert?: Maybe<DessertEntityResponse>;
  desserts?: Maybe<DessertEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  ingredient?: Maybe<IngredientEntityResponse>;
  ingredients?: Maybe<IngredientEntityResponseCollection>;
  item?: Maybe<ItemEntityResponse>;
  items?: Maybe<ItemEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  option?: Maybe<OptionEntityResponse>;
  options?: Maybe<OptionEntityResponseCollection>;
  restaurant?: Maybe<RestaurantEntityResponse>;
  salad?: Maybe<SaladEntityResponse>;
  salads?: Maybe<SaladEntityResponseCollection>;
  sandwich?: Maybe<SandwichEntityResponse>;
  sandwiches?: Maybe<SandwichEntityResponseCollection>;
  side?: Maybe<SideEntityResponse>;
  sides?: Maybe<SideEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryBeverageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryBeveragesArgs = {
  filters?: InputMaybe<BeverageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBurgerArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryBurgersArgs = {
  filters?: InputMaybe<BurgerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDayArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDaysArgs = {
  filters?: InputMaybe<DayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryDessertArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDessertsArgs = {
  filters?: InputMaybe<DessertFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryIngredientArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryIngredientsArgs = {
  filters?: InputMaybe<IngredientFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryItemArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryItemsArgs = {
  filters?: InputMaybe<ItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryOptionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryOptionsArgs = {
  filters?: InputMaybe<OptionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRestaurantArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySaladArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySaladsArgs = {
  filters?: InputMaybe<SaladFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySandwichArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySandwichesArgs = {
  filters?: InputMaybe<SandwichFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySideArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySidesArgs = {
  filters?: InputMaybe<SideFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Restaurant = {
  __typename?: 'Restaurant';
  createdAt?: Maybe<Scalars['DateTime']>;
  isClose: Scalars['Boolean'];
  moreOrders: Scalars['Boolean'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  schudule?: Maybe<Array<Maybe<RestaurantSchuduleDynamicZone>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RestaurantEntity = {
  __typename?: 'RestaurantEntity';
  attributes?: Maybe<Restaurant>;
  id?: Maybe<Scalars['ID']>;
};

export type RestaurantEntityResponse = {
  __typename?: 'RestaurantEntityResponse';
  data?: Maybe<RestaurantEntity>;
};

export type RestaurantInput = {
  isClose?: InputMaybe<Scalars['Boolean']>;
  moreOrders?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  schudule?: InputMaybe<Array<Scalars['RestaurantSchuduleDynamicZoneInput']>>;
};

export type RestaurantSchuduleDynamicZone = ComponentRestaurantSchedule | Error;

export type Salad = {
  __typename?: 'Salad';
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  ingredients?: Maybe<IngredientRelationResponseCollection>;
  name: Scalars['String'];
  position: Scalars['Int'];
  price: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SaladIngredientsArgs = {
  filters?: InputMaybe<IngredientFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SaladEntity = {
  __typename?: 'SaladEntity';
  attributes?: Maybe<Salad>;
  id?: Maybe<Scalars['ID']>;
};

export type SaladEntityResponse = {
  __typename?: 'SaladEntityResponse';
  data?: Maybe<SaladEntity>;
};

export type SaladEntityResponseCollection = {
  __typename?: 'SaladEntityResponseCollection';
  data: Array<SaladEntity>;
  meta: ResponseCollectionMeta;
};

export type SaladFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SaladFiltersInput>>>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  ingredients?: InputMaybe<IngredientFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SaladFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SaladFiltersInput>>>;
  position?: InputMaybe<IntFilterInput>;
  price?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SaladInput = {
  category?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type SaladRelationResponseCollection = {
  __typename?: 'SaladRelationResponseCollection';
  data: Array<SaladEntity>;
};

export type Sandwich = {
  __typename?: 'Sandwich';
  beverage?: Maybe<OptionEntityResponse>;
  bread?: Maybe<OptionEntityResponse>;
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  ingredients?: Maybe<IngredientRelationResponseCollection>;
  isYourTaste?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  position: Scalars['Int'];
  price: Scalars['Float'];
  side?: Maybe<OptionEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SandwichIngredientsArgs = {
  filters?: InputMaybe<IngredientFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SandwichEntity = {
  __typename?: 'SandwichEntity';
  attributes?: Maybe<Sandwich>;
  id?: Maybe<Scalars['ID']>;
};

export type SandwichEntityResponse = {
  __typename?: 'SandwichEntityResponse';
  data?: Maybe<SandwichEntity>;
};

export type SandwichEntityResponseCollection = {
  __typename?: 'SandwichEntityResponseCollection';
  data: Array<SandwichEntity>;
  meta: ResponseCollectionMeta;
};

export type SandwichFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SandwichFiltersInput>>>;
  beverage?: InputMaybe<OptionFiltersInput>;
  bread?: InputMaybe<OptionFiltersInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  ingredients?: InputMaybe<IngredientFiltersInput>;
  isYourTaste?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SandwichFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SandwichFiltersInput>>>;
  position?: InputMaybe<IntFilterInput>;
  price?: InputMaybe<FloatFilterInput>;
  side?: InputMaybe<OptionFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SandwichInput = {
  beverage?: InputMaybe<Scalars['ID']>;
  bread?: InputMaybe<Scalars['ID']>;
  category?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isYourTaste?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Float']>;
  side?: InputMaybe<Scalars['ID']>;
};

export type SandwichRelationResponseCollection = {
  __typename?: 'SandwichRelationResponseCollection';
  data: Array<SandwichEntity>;
};

export type Side = {
  __typename?: 'Side';
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  ingredients?: Maybe<IngredientRelationResponseCollection>;
  isCustomizable?: Maybe<Scalars['Boolean']>;
  isSauce?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  sauces?: Maybe<IngredientRelationResponseCollection>;
  selectOneOption?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SideIngredientsArgs = {
  filters?: InputMaybe<IngredientFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SideSaucesArgs = {
  filters?: InputMaybe<IngredientFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SideEntity = {
  __typename?: 'SideEntity';
  attributes?: Maybe<Side>;
  id?: Maybe<Scalars['ID']>;
};

export type SideEntityResponse = {
  __typename?: 'SideEntityResponse';
  data?: Maybe<SideEntity>;
};

export type SideEntityResponseCollection = {
  __typename?: 'SideEntityResponseCollection';
  data: Array<SideEntity>;
  meta: ResponseCollectionMeta;
};

export type SideFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SideFiltersInput>>>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  ingredients?: InputMaybe<IngredientFiltersInput>;
  isCustomizable?: InputMaybe<BooleanFilterInput>;
  isSauce?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SideFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SideFiltersInput>>>;
  position?: InputMaybe<IntFilterInput>;
  price?: InputMaybe<FloatFilterInput>;
  sauces?: InputMaybe<IngredientFiltersInput>;
  selectOneOption?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SideInput = {
  category?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isCustomizable?: InputMaybe<Scalars['Boolean']>;
  isSauce?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Float']>;
  sauces?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  selectOneOption?: InputMaybe<Scalars['Boolean']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};
