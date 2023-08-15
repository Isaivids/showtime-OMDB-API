import { configureStore } from "@reduxjs/toolkit";
import CollectionReducer from './slice/Collection';

export const Store = configureStore({
    reducer : {movies: CollectionReducer}
})

export type AppDispatch = typeof Store.dispatch