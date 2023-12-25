import { useSelector } from 'react-redux';
import useNowPlayingVideos from '../CustomHooks/useNowPlayingVideos'
import usePopularVideos from '../CustomHooks/usePopularVideos';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import useTrendingVideos from '../CustomHooks/useTrendingVideo';
import useUpcomingVideo from '../CustomHooks/useUpcomingVideo';
import Play from './Play';
import Footer from './Footer';


const Browse = () => {
  
  const gptValue = useSelector(store => store.gpt)
  useNowPlayingVideos();
  usePopularVideos();
  useTrendingVideos();
  useUpcomingVideo();
  return (
    <div>
    <Header/>
    {
    gptValue.movie_id
    ?
    <Play/>
    : 
    gptValue?.button ?
    <GptSearch/>
    :
    <>
    <MainContainer/>
    <SecondryContainer/>
    </>
}
{gptValue?.button ?
<div className='sm:sticky sm:bottom-0 sm:left-0 sm:right-0'>
<Footer/>
</div>
:
<Footer/>
}
    </div>
  )
}

export default Browse