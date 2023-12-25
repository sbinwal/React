import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import useMovieTrailerVideo from '../CustomHooks/useMovieTrailerVideo'

const Play = () => {
    const id = useSelector((state)=>state.gpt.movie_id)
    const trailer = useSelector(store => store?.movies?.trailer)
    useMovieTrailerVideo(id)
    console.log("sdfsdfs",trailer)
  return (
    <div>
         <Header/>
         <div className=''>
      <iframe
        className='w-screen aspect-video hover:none sm:h-screen xl:h-[60%]'
        src={`https://www.youtube.com/embed/${trailer?.key}?si=a532StiKndpyNPAC&autoplay=1`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

    </div>
    </div>
  )
}

export default Play