export type ProductType = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  thumbnail: string;
};

export type ProductsType = {
  products: ProductType[];
  loading: boolean;
  error: string | null;
};

//actions products
export type ActionProductType =
  | { type: "products/loading" }
  | { type: "products/loaded"; payload: ProductType[] }
  | { type: "products/error"; payload: string | null };
