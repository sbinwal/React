import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState : {
        "button" : false,
       
    },
    reducers : {
        searchButton : (state,action)=>{
              state.button = action.payload
        },

    }
})

export const { searchButton } = searchSlice.actions;
export default searchSlice.reducer