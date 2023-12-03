import React from 'react'
import GptSearchBar from './GptSearchBar'


const GptSearch = () => {
    
  return (
    <div className='relative'>
        <div className='absolute -z-50'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt='background' className='h-[50rem]' />
          </div>
        <GptSearchBar/>
        {/* <GptSearchSuggestion/> */}
    </div>
  )
}

export default GptSearch