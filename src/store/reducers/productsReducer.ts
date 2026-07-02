import type { ActionProductType, ProductsType } from "../types/productsType";

const initialState: ProductsType = {
  products: [],
  loading: false,
  error: null,
};

export function productReducer(
  state: ProductsType = initialState,
  action: ActionProductType,
) {
  switch (action.type) {
    case "products/loading":
      return { ...state, loading: true };

    case "products/loaded":
      return { ...state, loading: false, products: action.payload };

    case "products/error":
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
}
