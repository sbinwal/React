import React from 'react'
import Movie from './Movie'
import "./CSS/MovieList.css"

const MovieList = ({movies,title}) => {
   
   
  return (
    <div className='my-8 mx-5'>
       <span className='text-2xl font-bold my-4 text-white'>{title}</span>
    <div className='flex overflow-x-scroll gap-4 mt-2 scrollbar-hide'>
        {movies?.map((item,index)=>{
            return(
              <div>
                <Movie PosterPath = {item?.poster_path}/> 
                </div>  
            )
        })}
    </div>
    </div>
  )
}

export default MovieList