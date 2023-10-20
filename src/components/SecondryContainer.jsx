import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
 
  const nowPlayingMovies = useSelector((store)=>store.movies?.nowPlayingMovies)
  const usePopularMovies = useSelector((store)=>store.movies?.popularMovies)

  return (
   <div className='bg-black mx-4'>
    <div className='-mt-52 relative z-20'>
      <MovieList movies = {nowPlayingMovies}  title= {"Now Playing"}/>
      </div>
      <MovieList movies = {usePopularMovies} title= {"Popular"}/>
      <MovieList movies = {nowPlayingMovies} title = {"Trending"}/>
      <MovieList movies = {nowPlayingMovies} title = {"Upcoming"}/>
      <MovieList movies = {nowPlayingMovies} title = {"Comedy"}/>
   </div>
  )
}

export default SecondryContainer