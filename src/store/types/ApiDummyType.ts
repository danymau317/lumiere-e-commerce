import { type ProductType } from "./productsType";

export type ApiDummyType = {
  products: ProductType[];
  total: number;
  skip?: number;
  limit: number;
};

//actions ApiDummy
