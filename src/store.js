import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './slices/customerSlice';

export const store = configureStore({
    devTools: true,
    reducer: {
        customers: customerReducer
    }
    //reducer is a property of redux, for managing state changes
})