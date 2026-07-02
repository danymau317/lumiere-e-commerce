import type { AppType } from "vite";
import type { AppDispatchType } from "../store";

export function fetchProducts() {
  return async function (dispatch: AppDispatchType, getState: AppType) {
    dispatch({ type: "products/loading" });

    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    dispatch({ type: "products/loaded", payload: data.products });
  };
}
