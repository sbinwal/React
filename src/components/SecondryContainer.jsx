import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
 
  const nowPlayingMovies = useSelector((store)=>store.movies?.nowPlayingMovies)
  const usePopularMovies = useSelector((store)=>store.movies?.popularMovies)
  const useTrendingMovies = useSelector((store)=>store.movies?.trendingMovies)
  const useUpcomingMovies = useSelector((store)=>store.movies?.upcomingMovies)

  return (
   <div className='bg-black bg-opacity-90 h-full'>
    <div className='xl:-mt-52 sm:-mt-[29%] md:-mt-[23%] relative z-20'>
      <MovieList movies = {nowPlayingMovies}  title= {"Now Playing"}/>
      </div>
      <MovieList movies = {usePopularMovies} title= {"Popular"}/>
      <MovieList movies = {useTrendingMovies} title = {"Trending"}/>
      <MovieList movies = {useUpcomingMovies} title = {"Upcoming"}/>
      <MovieList movies = {nowPlayingMovies} title = {"Comedy"}/>
   </div>
  )
}

export default SecondryContainer