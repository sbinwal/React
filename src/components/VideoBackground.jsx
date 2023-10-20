import React, { useEffect } from 'react'
import { API_Options } from '../constants/constants';
import { addTrailer } from '../utils/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import useMovieTrailerVideo from '../CustomHooks/useMovieTrailerVideo';

const VideoBackground = ({ movieId }) => {
  console.log("movieId", movieId)
  const trailer = useSelector(store => store?.movies?.trailer)
   useMovieTrailerVideo(movieId)

  return (
    <div className=''>
      <iframe
        className='w-screen aspect-video hover:none'
        style={{"pointerEvents": "none"}}
        src={`https://www.youtube.com/embed/${trailer?.key}?si=a532StiKndpyNPAC&autoplay=1&mute=1`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

    </div>
  )
}

export default VideoBackground