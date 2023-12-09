import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { language } from '../utils/languageConstant'
import { openai } from '../utils/openAI'
import { API_Options } from '../constants/constants'
import { gptSuggestions } from '../utils/gptSlice'
import { searchButton } from '../utils/searchSlice'



const GptSearchBar = () => {
    const langKey = useSelector((state)=>state.config?.lang)
    const searchText = useRef(null)
    const dispatch = useDispatch()

    const searchMovieTMDB = async(movie) =>{

      console.log("hello")
      const movieResult = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_Options)
      
      const response = await movieResult.json()

      console.log("hi")

      return response.results;
    }
    const handleGPTSearch = ()=>{

      console.log(searchText?.current?.value)

      dispatch(searchButton(true))

      const gpt_query = "Act as a movie recommendation system and suggest 5 movies for my query : " + searchText?.current?.value + "and give me only name of 5 movies which are comma separated like the example result given ahead. Example results: Gadar, Don, Golmaal, Sholay, tere naam."

      async function main() {
        const gptResults = await openai.chat.completions.create({
          messages: [{ role: 'user', content: gpt_query }],
          model: 'gpt-3.5-turbo',
        });
        console.log("sdsdfsd",gptResults?.choices)
        const gptResultsArray = gptResults?.choices?.[0]?.message?.content.split(",")
        console.log("gptArray",gptResultsArray)
        const promiseArray = gptResultsArray.map((item)=>{
          return searchMovieTMDB(item);
          
        })

        const tmdbResults = await Promise.all(promiseArray)
        console.log("tmdb",tmdbResults)
        dispatch(gptSuggestions({"movies" : gptResultsArray, "moviesResults" : tmdbResults}))
      }
      main();

      //Now for each result make an API call

      
    }
  return (
    <div className='pt-[10rem] container mx-auto flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12 rounded' onSubmit={(e)=>e.preventDefault()}>
           
        <input
        type="text"
        ref = {searchText}
        placeholder={language[langKey]?.placeHolder}
        className='col-span-9 m-2 py-3 px-2 rounded'
      />
      <button className='my-2 col-span-3 bg-red-600 rounded me-2' onClick={()=>{handleGPTSearch()}}>{language[langKey]?.search}</button>
     
        </form>
    </div>
  )
}

export default GptSearchBar