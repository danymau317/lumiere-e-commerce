import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { thunk, type ThunkDispatch } from "redux-thunk";

import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type RootStateType = ReturnType<typeof rootReducer>;

export type AppDispatchType = ThunkDispatch<RootStateType, unknown, any>;

export type AppStateType = typeof store.getState;

export default store;
