import { type ProductsType } from "./productsType";

export type ApiDummyType = {
  products: ProductsType[];
  total: number;
  skip?: number;
  limit: number;
};

//actions ApiDummy
