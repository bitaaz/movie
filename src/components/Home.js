import React from "react";
//config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";
//components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";

import { useHomeFetch } from "./hooks/useHomeFetch";

//noImage
import NoImage from "../images/no_image.jpg";
import Spinner from "./Spinner";
import MovieSearchBar from "./SearchBar";
import Button from "./Button";
import Navbar from "./Navbar";
import SingleLineGridList from "./HorizontalScrollMenu";

const Home = () => {
  const {
    topRatedMovies,
    upcomingMovies,
    nowPlayingMovies,
    state,
    isLoading,
    error,
    setSearchedItem,
    searchedItem,
    setLoadMore,
  } = useHomeFetch();

  console.log(state);

  return (
    <>
      {!searchedItem && <Navbar />}
      {!searchedItem && state.results[0] ? (
        <HeroImage heros={state.results.slice(0, 6)} />
      ) : null}
      <MovieSearchBar setSearchedItem={setSearchedItem} />
      {searchedItem ? (
        <Grid header="Search Results ">
          {state.results.map((movie) => (
            <Thumb
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
              }
              movieId={movie.id}
            />
          ))}
        </Grid>
      ) : (
        <>
          <SingleLineGridList
            gridItemsInfo={state.results}
            title="Popular Movies"
            page={state.page}
            totalPages={state.total_pages}
          />
          <SingleLineGridList
            gridItemsInfo={nowPlayingMovies.results}
            title="Now Playing Movies"
            page={nowPlayingMovies.page}
            totalPages={nowPlayingMovies.total_pages}
          />
          <SingleLineGridList
            gridItemsInfo={upcomingMovies.results}
            title="Upcoming Movies"
            page={upcomingMovies.page}
            totalPages={upcomingMovies.total_pages}
          />
          <SingleLineGridList
            gridItemsInfo={topRatedMovies.results}
            title="Top Rated Movies"
            page={topRatedMovies.page}
            totalPages={topRatedMovies.total_pages}
          />
        </>
      )}

      {searchedItem && isLoading && <Spinner />}
      {searchedItem && !isLoading && state.page < state.total_pages && (
        <Button
          text="Load More"
          callback={() => {
            setLoadMore(true);
          }}
        />
      )}
    </>
  );
};

export default Home;
