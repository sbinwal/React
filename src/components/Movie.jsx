import React from 'react'

const Movie = ({Image_URL}) => {
  return (
    <div>
     
    <div className='w-40'>
        <img src={Image_URL} alt="movie"/>
    </div>
    </div>
  )
}

export default Movie