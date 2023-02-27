import { configureStore } from "@reduxjs/toolkit";

import catLoctionMap from "./modules/MapSlice";


const store = configureStore({
    reducer:{catLoctionMap}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;