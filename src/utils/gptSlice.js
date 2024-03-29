import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        "button" : false,
        "movies" : null,
        "moviesResults" : null,
        "movie_id" : null
    },
    reducers : {
        toggleButton : (state,action)=>{
              state.button = !state.button
        },
        gptSuggestions : (state,action)=>{
            if(action?.payload === null)
            {
                state.movies = null
                state.moviesResults = null
            }
            else{
            const {movies,moviesResults} = action.payload
            state.movies = movies
            state.moviesResults = moviesResults
            }
      },
      movieId : (state,action)=>{
        console.log("ssdsad",action.payload)
          state.movie_id = action.payload
      }

    }
})

export const { toggleButton, gptSuggestions,movieId } = gptSlice.actions;
export default gptSlice.reducer