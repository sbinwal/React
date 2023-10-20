import useNowPlayingVideos from '../CustomHooks/useNowPlayingVideos'
import usePopularVideos from '../CustomHooks/usePopularVideos';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';


const Browse = () => {
  
  useNowPlayingVideos();
  usePopularVideos();
  return (
    <div>
    <Header/>
    <MainContainer/>
    <SecondryContainer/>
    </div>
  )
}

export default Browse