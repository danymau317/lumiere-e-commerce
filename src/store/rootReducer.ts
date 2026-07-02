import { combineReducers } from "redux";
import { themeReducer } from "./reducers/themeReducer";
import { productReducer } from "./reducers/productsReducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  products: productReducer,
});
