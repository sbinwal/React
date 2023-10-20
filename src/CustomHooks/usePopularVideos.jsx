import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {  addPopularMovies } from '../utils/moviesSlice';
import { API_Options } from '../constants/constants';

const usePopularVideos = () => {
    const dispatch = useDispatch();
  const fetchMovieData = async()=>{
         
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_Options)
    const json = await data.json();
    console.log("jsonn",json)
    dispatch(addPopularMovies(json.results))

    console.log("data",json)
  }
  useEffect(()=>{
      
    fetchMovieData();
  },[])
}

export default usePopularVideos