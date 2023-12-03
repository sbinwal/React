import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        "button" : false
    },
    reducers : {
        toggleButton : (state,action)=>{
              state.button = !state.button
        }
    }
})

export const { toggleButton } = gptSlice.actions;
export default gptSlice.reducer