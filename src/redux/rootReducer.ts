import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";

// import bookSlice from "../redux/features/book/bookSlice";

export const rootReducer = combineReducers({
  //   auth: authSlice,

  [baseApi.reducerPath]: baseApi.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
