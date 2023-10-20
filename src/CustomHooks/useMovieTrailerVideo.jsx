import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailer } from '../utils/moviesSlice';
import { API_Options } from '../constants/constants';

const useMovieTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
  
  const fetchVideo = async () => {

    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_Options)
    const json = await data.json();
    console.log("json", json)
    const movieVideo = json?.results?.filter(movie => movie.name.startsWith("Official"))
    const trailer = movieVideo?.length ? movieVideo[0] : json[0]
    dispatch(addTrailer(trailer))

    console.log("sgdcgsd", movieVideo)

    console.log("data", json)
  }
  useEffect(() => {

    fetchVideo();
  }, [])
}

export default useMovieTrailerVideo