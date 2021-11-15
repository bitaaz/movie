import React from "react";

//components
import HeroImage from "./HeroImage";
import Spinner from "./Spinner";
import MovieSearchBar from "./SearchBar";
import Button from "./Button";
import Navbar from "./Navbar";
import SingleLineGridList from "./HorizontalScrollMenu";
import { SearchResults } from "./SearchResults/SearchResults";

//hooks
import { useHomeFetch } from "./hooks/useHomeFetch";
import { Footer } from "./Footer/Footer";

const Home = () => {
  const {
    topRatedMovies,
    upcomingMovies,
    nowPlayingMovies,
    state,
    isLoading,
    setSearchedItem,
    searchedItem,
    setLoadMore,
  } = useHomeFetch();

  // console.log(state);

  return (
    <>
      {!searchedItem && <Navbar showAllMoviesMode="false" />}
      {!searchedItem && state.results[0] ? (
        <HeroImage heros={state.results.slice(0, 6)} />
      ) : null}
      <MovieSearchBar setSearchedItem={setSearchedItem} />
      {searchedItem ? (
        <SearchResults searchedData={state} />
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
      <Footer />
    </>
  );
};

export default Home;
