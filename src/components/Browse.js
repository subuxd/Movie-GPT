import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/**
        Planning
        - Main Container
          - Video background
          - Video Title
        - Secondary Container
          - Movie list * n
            -cards*n
    
    */}
    </div>
  );
};

export default Browse;
