import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";
import searchSlice from "./searchSlice";


const appStore = configureStore({
    reducer : {
        user : userReducer,
        movies : moviesReducer,
        gpt : gptSlice,
        config : configSlice,
        search : searchSlice,

    },
})

export default appStore;