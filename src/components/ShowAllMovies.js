import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Thumb from "./Thumb";
import Grid from "./Grid";
import { Spinner } from "./Spinner/Spinner.styles";
import Button from "./Button";
import { useHomeFetch } from "./hooks/useHomeFetch";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import NoImage from "../images/no_image.jpg";
import { Fade, Typography } from "@material-ui/core";
import { ThumbUp } from "@material-ui/icons";

const loadMoreMovies = (moviesInfo, data) => {
  data.tileData = moviesInfo.results.map((item) => ({
    img: item.poster_path
      ? IMAGE_BASE_URL + POSTER_SIZE + item.poster_path
      : NoImage,
    id: item.id,
    title: item.original_title,
    vote_average: item.vote_average,
    likes: parseFloat((item.vote_average / 10) * 100).toPrecision(2),
    release_date: item.release_date.substring(0, 4),
    original_language: item.original_language,
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

  const [detailsVisibleOnHover, setDetailsVisibleOnHover] = useState({
    isHovered: {},
  });

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

  const handleMouseEnter = (index) => {
    setDetailsVisibleOnHover((prevState) => {
      return { isHovered: { ...prevState.isHovered, [index]: true } };
    });
  };

  const handleMouseLeave = (index) => {
    setDetailsVisibleOnHover((prevState) => {
      return { isHovered: { ...prevState.isHovered, [index]: false } };
    });
  };

  console.log(isLoadingTop);

  const { isHovered } = detailsVisibleOnHover;

  return (
    <>
      <Navbar />
      <Grid header={data.title}>
        {data.tileData.map((tile) => (
          <div
            style={{
              position: "relative",
            }}
            onMouseEnter={() => handleMouseEnter(tile.id)}
            onMouseLeave={() => handleMouseLeave(tile.id)}
          >
            <Thumb key={tile.id} clickable image={tile.img} movieId={tile.id} />
            <Fade in={isHovered[tile.id]} timeout={400}>
              <div
                style={{
                  position: "absolute",
                  transform: "translateX(-50%)",
                  top: "0",
                  left: "170px",
                  width: "400px",
                  cursor: "pointer",
                  height: "100%",
                  backgroundColor: "rgba(255,255,255,0.7)",
                }}
              >
                <div
                  style={{
                    color: "white",
                    position: "absolute",
                    top: "70%",
                    left: "100px",
                    display: "flex",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        backgroundColor: "#757575",
                        padding: "2px",
                        paddingLeft: "6px",
                        borderStartStartRadius: "10px",
                        borderEndStartRadius: "10px",
                        fontSize: "10px",
                      }}
                    >
                      IMDB{" "}
                    </Typography>
                    <Typography
                      style={{
                        background: "#616161",
                        padding: "2px",
                        paddingRight: "5px",
                        paddingLeft: "3px",
                        borderStartEndRadius: "10px",
                        borderEndEndRadius: "10px",
                        fontSize: "10px",
                      }}
                    >
                      {tile.vote_average} / 10
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "3px",
                    }}
                  >
                    <ThumbUp
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#757575",
                        borderStartStartRadius: "10px",
                        borderEndStartRadius: "10px",
                        padding: "3px",
                      }}
                    />

                    <Typography
                      style={{
                        fontSize: "10px",
                        background: "#616161",
                        borderStartEndRadius: "10px",
                        borderEndEndRadius: "10px",
                        padding: "2.5px",
                      }}
                    >
                      {tile.likes}%
                    </Typography>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade in={isHovered[tile.id]} timeout={400}>
              <div
                style={{
                  position: "absolute",
                  color: "#424242",
                  left: "20%",
                  top: "78%",
                  transform: "translateX(-50%)",
                  cursor: "pointer",
                }}
              >
                <Typography style={{ fontSize: "12px", fontWeight: "bolder" }}>
                  {tile.release_date} - {tile.original_language}
                </Typography>
              </div>
            </Fade>
            <Typography>{tile.title}</Typography>
          </div>
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
