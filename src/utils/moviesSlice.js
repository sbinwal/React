import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        popularMovies : null,
        trailer : null,
        trendingMovies : null,
        upcomingMovies : null,
    },
    reducers : {
        addNowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state,action) =>{
            state.popularMovies = action.payload;
        },
        addTrendingMovies : (state,action) =>{
            state.trendingMovies = action.payload;
        },
        addUpcomingMovies : (state,action) =>{
            state.upcomingMovies = action.payload;
        },
        addTrailer : (state,action) =>{
            state.trailer = action.payload;
        },
        

    }
})

export const { addNowPlayingMovies, addTrailer, addPopularMovies, addTrendingMovies, addUpcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer