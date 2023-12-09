import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import Loader from './Loader'

const GptSearchSuggestions = () => {

    const {movies,moviesResults} = useSelector((store)=>store.gpt)

    // if(!movies)
    // {
    //     return
    // }

  return (
   <div>
    {!movies ?
    <Loader/>
    :
    <div className='bg-black text-white opacity-90 mt-10 py-1'>
        {movies.map((item,index)=>{
            return(
                <MovieList movies={moviesResults[index]} title = {item}/>
            )
        })
}
    </div>
}
    </div>


  )
}

export default GptSearchSuggestions