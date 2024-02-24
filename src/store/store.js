import { configureStore } from "@reduxjs/toolkit";
import { adminAuthReducer } from "../store/adminSlice.js";

export const store = configureStore({
    reducer: {
        auth: adminAuthReducer,
    },
});
