import { useSelector } from 'react-redux';
import useNowPlayingVideos from '../CustomHooks/useNowPlayingVideos'
import usePopularVideos from '../CustomHooks/usePopularVideos';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import useTrendingVideos from '../CustomHooks/useTrendingVideo';
import useUpcomingVideo from '../CustomHooks/useUpcomingVideo';


const Browse = () => {
  
  const gptValue = useSelector(store => store.gpt)
  useNowPlayingVideos();
  usePopularVideos();
  useTrendingVideos();
  useUpcomingVideo();
  return (
    <div>
    <Header/>
    {gptValue?.button ?
    <GptSearch/>
    :
    <>
    <MainContainer/>
    <SecondryContainer/>
    </>
}
    </div>
  )
}

export default Browse