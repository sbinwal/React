import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies, addTrendingMovies } from '../utils/moviesSlice';
import { API_Options } from '../constants/constants';

const useTrendingVideos = () => {
    const dispatch = useDispatch();
  const fetchMovieData = async()=>{
         
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_Options)
    const json = await data.json();
    dispatch(addTrendingMovies(json.results))

    console.log("data",json)
  }
  useEffect(()=>{
      
    fetchMovieData();
  },[])
}

export default useTrendingVideos