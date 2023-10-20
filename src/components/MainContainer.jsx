import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
    console.log("movies",movies)
     
    if(!movies) return
    const mainMovie = movies[0];
    const {original_title, overview, id} = mainMovie
    console.log("id",id)

  return (
    <div className='relative  bg-gradient-to-r from-black aspect-video w-screen'>
        <VideoBackground movieId = {id}/>
        <VideoTitle title = {original_title} overview = {overview}/>
    </div>
  )
}

export default MainContainer