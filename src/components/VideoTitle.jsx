import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { movieId } from '../utils/gptSlice';

const VideoTitle = ({title,overview}) => {

  const dispatch = useDispatch()
  const movies = useSelector((state)=>state.movies?.nowPlayingMovies)
     
    if(!movies) return
    const mainMovie = movies[0];
    const {id} = mainMovie
    console.log("id",id)
  
  const GetMovieId = ()=>{

    dispatch(movieId(id))
  }
    
  return (
   
    <div className='absolute top-[30%] left-[2%] text-white'>
     
      <h1 className='xl:text-4xl md:text-2xl sm:text-lg md:font-bold sm:font-medium sm:hidden md:block'>{title}</h1>
      <p className='my-4 text-sm xl:w-1/4 md:w-[70%] sm:hidden md:hidden xl:block'>{overview}</p>
      <div className='sm:my-[8%] md:my-6 xl:my-0'>
      <button className='border md:px-8 md:py-1 me-6 sm:px-4 sm:py-1 bg-slate-500 hover:bg-slate-600 rounded-lg' onClick={()=>{GetMovieId()}}><PlayArrowIcon/>Play</button>
      <button className='border md:px-4 md:py-1 sm:px-1 sm:py-1 bg-slate-500 hover:bg-slate-600 rounded-lg'><InfoOutlinedIcon/>More Info</button>
     </div>
    </div>
  
  )
}

export default VideoTitle