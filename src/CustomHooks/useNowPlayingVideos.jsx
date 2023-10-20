import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { API_Options } from '../constants/constants';

const useNowPlayingVideos = () => {
    const dispatch = useDispatch();
  const fetchMovieData = async()=>{
         
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options)
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))

    console.log("data",json)
  }
  useEffect(()=>{
      
    fetchMovieData();
  },[])
}

export default useNowPlayingVideos