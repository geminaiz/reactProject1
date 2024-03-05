import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "./citiesSlice";
import { counterReducer } from "./counterSlice";

export default configureStore({
    reducer: {
        counter: counterReducer, // gli slice rappresentano una gestione separata degli stati
        cities: citiesReducer,
    },
});