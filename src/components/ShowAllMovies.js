import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Thumb from "./Thumb";
import Grid from "./Grid";
import { Spinner } from "./Spinner/Spinner.styles";
import Button from "./Button";
import { useHomeFetch } from "./hooks/useHomeFetch";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import NoImage from "../images/no_image.jpg";

const loadMoreMovies = (moviesInfo, data) => {
  data.tileData = moviesInfo.results.map((item) => ({
    img: item.poster_path
      ? IMAGE_BASE_URL + POSTER_SIZE + item.poster_path
      : NoImage,
    id: item.id,
    title: item.original_title,
  }));
};

export const ShowAllMovies = () => {
  const {
    isLoading,
    setLoadMore,
    state,
    isLoadingNowPlaying,
    setLoadMoreNowPlaying,
    nowPlayingMovies,
    isLoadingUpcoming,
    setLoadMoreUpcoming,
    upcomingMovies,
    isLoadingTop,
    setLoadMoreTop,
    topRatedMovies,
  } = useHomeFetch();

  const location = useLocation();
  const { data } = location.state;
  if (isLoading) {
    loadMoreMovies(state, data);
  } else if (isLoadingNowPlaying) {
    loadMoreMovies(nowPlayingMovies, data);
  } else if (isLoadingUpcoming) {
    loadMoreMovies(upcomingMovies, data);
  } else if (isLoadingTop) {
    loadMoreMovies(topRatedMovies, data);
  }

  console.log(isLoadingTop);

  return (
    <>
      <Navbar />
      <Grid header={data.title}>
        {data.tileData.map((tile) => (
          <Thumb key={tile.id} clickable image={tile.img} movieId={tile.id} />
        ))}
      </Grid>
      {data.title === "Popular Movies" && isLoading && <Spinner />}
      {data.title === "Popular Movies" &&
        !isLoading &&
        data.page < data.totalPages && (
          <Button
            text="Load More"
            callback={() => {
              setLoadMore(true);
            }}
          />
        )}

      {data.title === "Now Playing Movies" && isLoadingNowPlaying && (
        <Spinner />
      )}
      {data.title === "Now Playing Movies" &&
        !isLoadingNowPlaying &&
        data.page < data.totalPages && (
          <Button
            text="Load More"
            callback={() => {
              setLoadMoreNowPlaying(true);
            }}
          />
        )}
      {data.title === "Upcoming Movies" && isLoadingUpcoming && <Spinner />}
      {data.title === "Upcoming Movies" &&
        !isLoadingUpcoming &&
        data.page < data.totalPages && (
          <Button
            text="Load More"
            callback={() => {
              setLoadMoreUpcoming(true);
            }}
          />
        )}
      {data.title === "Top Rated Movies" && isLoadingTop && <Spinner />}
      {data.title === "Top Rated Movies" &&
        !isLoadingTop &&
        data.page < data.totalPages && (
          <Button
            text="Load More"
            callback={() => {
              setLoadMoreTop(true);
            }}
          />
        )}
    </>
  );
};
