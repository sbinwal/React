import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {addUpcomingMovies } from '../utils/moviesSlice';
import { API_Options } from '../constants/constants';

const useUpcomingVideo = () => {
    const dispatch = useDispatch();
  const fetchMovieData = async()=>{
         
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_Options)
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results))

    console.log("data",json)
  }
  useEffect(()=>{
      
    fetchMovieData();
  },[])
}

export default useUpcomingVideo 