import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const VideoTitle = ({title,overview}) => {
    
  return (
   
    <div className='absolute top-52 left-10 text-white'>
     
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='my-4 text-sm w-1/4'>{overview}</p>
      <button className='border px-8 py-1 me-6 bg-slate-500 hover:bg-slate-600'><PlayArrowIcon/>Play</button>
      <button className='border px-4 py-1 bg-slate-500 hover:bg-slate-600'><InfoOutlinedIcon/>More Info</button>
     
    </div>
  
  )
}

export default VideoTitle