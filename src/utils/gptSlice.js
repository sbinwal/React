import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        "button" : false,
        "movies" : null,
        "moviesResults" : null
    },
    reducers : {
        toggleButton : (state,action)=>{
              state.button = !state.button
        },
        gptSuggestions : (state,action)=>{
            const {movies,moviesResults} = action.payload
            state.movies = movies
            state.moviesResults = moviesResults
      }

    }
})

export const { toggleButton, gptSuggestions } = gptSlice.actions;
export default gptSlice.reducer