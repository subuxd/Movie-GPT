import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
        {/**
    Planning
    -MovieList - Popular
      -MovieCard * n
    -MovieList - Now Playing
      -MovieCard * n
    -MovieList - Trending
      -MovieCard * n
    -MovieList - Horror
      -MovieCard * n
*/}
      </div>
    )
  );
};

export default SecondaryContainer;
