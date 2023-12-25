import React from 'react'
import { imgURL } from '../constants/constants'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { movieId } from '../utils/gptSlice'

const Movie = ({PosterPath,id}) => {

  const dispatch = useDispatch()
  // const id = useSelector(state=>state.movieId.movie_id)
  const GetMovieId = ()=>{

    dispatch(movieId(id))
  }

  if(!PosterPath)
  {
      return null
  }
  return (
    <div>
     
    <div className='w-40'>
        <img src={imgURL + PosterPath} alt="movie" className='h-[200px] lg:w-[180px] sm:w-[200px] rounded-lg hover:cursor-pointer' onClick={()=>{GetMovieId()}}/>
    </div>
    </div>
  )
}

export default Movie