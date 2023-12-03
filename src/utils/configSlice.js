import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "config",
    initialState : {
        "lang" : "en"
    },
    reducers : {
        changeLanguage : (state,action)=>{
              state.lang = action.payload
        }
    }
})

export const { changeLanguage } = gptSlice.actions;
export default gptSlice.reducer