import React from 'react'
import { imgURL } from '../constants/constants'

const Movie = ({PosterPath}) => {

  if(!PosterPath)
  {
      return null
  }
  return (
    <div>
     
    <div className='w-40'>
        <img src={imgURL + PosterPath} alt="movie" className='h-[200px] lg:w-[180px] sm:w-[200px] rounded-lg'/>
    </div>
    </div>
  )
}

export default Movie