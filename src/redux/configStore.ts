import { configureStore } from "@reduxjs/toolkit";

import codeTest from "./modules/CodeTestSlice";


const store = configureStore({
    reducer:{codeTest}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;