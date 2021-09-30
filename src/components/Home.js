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
import SearchBar from "./SearchBar";
import Button from "./Button";
import Navbar from "./Navbar";

const Home = () => {
  const {
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
      <Navbar />
      {!searchedItem && state.results[0] ? (
        <HeroImage
          image={[
            `${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`,
            `${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[1].backdrop_path}`,
            `${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[2].backdrop_path}`,
            `${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[3].backdrop_path}`,
            `${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[4].backdrop_path}`,
            `${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[5].backdrop_path}`,
          ]}
          title={[
            state.results[0].original_title,
            state.results[1].original_title,
            state.results[2].original_title,
            state.results[3].original_title,
            state.results[4].original_title,
            state.results[5].original_title,
          ]}
          text={[
            state.results[0].overview,
            state.results[1].overview,
            state.results[2].overview,
            state.results[3].overview,
            state.results[4].overview,
            state.results[5].overview,
          ]}
        />
      ) : null}
      <SearchBar setSearchedItem={setSearchedItem} />
      <Grid header="Popular Movies">
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
      {isLoading && <Spinner />}
      {!isLoading && state.page < state.total_pages && (
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
