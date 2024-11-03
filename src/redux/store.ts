import { configureStore } from "@reduxjs/toolkit";

import { baseApi } from "./api/baseApi";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(baseApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
