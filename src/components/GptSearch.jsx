import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchSuggestions from './GptSearchSuggestions'
import { useSelector } from 'react-redux'



const GptSearch = () => {

  const enableSuggestion = useSelector((store)=>store?.search?.button)
  
    
  return (
    <div className='relative'>
        <div className=''>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt='background' className={`fixed top-0 left-0 w-full h-full bg-fill bg-center -z-50`}/>
          </div>
        <GptSearchBar/>
        <div className={`${enableSuggestion?"block" : "invisible"}`}>
        <GptSearchSuggestions/>
        </div>

    </div>
  )
}

export default GptSearch