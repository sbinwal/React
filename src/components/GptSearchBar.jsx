import React from 'react'
import { useSelector } from 'react-redux'
import { language } from '../utils/languageConstant'

const GptSearchBar = () => {
    const langKey = useSelector((state)=>state.config?.lang)
  return (
    <div className='pt-[10rem] container mx-auto flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12 rounded'>
           
        <input
        type="text"
        value={""}
        onChange={""}
        placeholder={language[langKey]?.placeHolder}
        className='col-span-9 m-2 py-3 px-2 rounded'
      />
      <button className='my-2 col-span-3 bg-red-600 rounded'>{language[langKey]?.search}</button>
     
        </form>
    </div>
  )
}

export default GptSearchBar