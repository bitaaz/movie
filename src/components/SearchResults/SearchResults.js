import React, { useState } from "react";
import Thumb from "../Thumb";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from "../../images/no_image.jpg";
import { Link } from "react-router-dom";
import { Fade, Typography } from "@material-ui/core";
import { ThumbUp } from "@material-ui/icons";
import Grid from "../Grid";

export const SearchResults = ({ searchedData }) => {
  const [detailsVisibleOnHover, setDetailsVisibleOnHover] = useState({
    isHovered: {},
  });

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

  const { isHovered } = detailsVisibleOnHover;

  return (
    <Grid header="Search Results ">
      {searchedData.results.map((movie) => (
        <div
          key={movie.id}
          style={{
            position: "relative",
          }}
          onMouseEnter={() => handleMouseEnter(movie.id)}
          onMouseLeave={() => handleMouseLeave(movie.id)}
        >
          <Thumb
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            height="350px"
          />
          <Link to={`/${movie.id}`}>
            <Fade in={isHovered[movie.id]} timeout={400}>
              <div
                style={{
                  position: "absolute",
                  transform: "translateX(-50%)",
                  top: "0",
                  left: "170px",
                  width: "400px",
                  cursor: "pointer",
                  height: "88%",
                  backgroundColor: "rgba(255,255,255,0.5)",
                }}
              >
                <div
                  style={{
                    color: "white",
                    position: "absolute",
                    top: "80%",
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
                      {movie.vote_average} / 10
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
                      {parseFloat((movie.vote_average / 10) * 100).toPrecision(
                        2
                      )}
                      %
                    </Typography>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade in={isHovered[movie.id]} timeout={400}>
              <div
                style={{
                  position: "absolute",
                  color: "black",
                  left: "28%",
                  top: "78%",
                  transform: "translateX(-50%)",
                  cursor: "pointer",
                }}
              >
                <Typography style={{ fontSize: "12px", fontWeight: "bolder" }}>
                  {movie.release_date} - {movie.original_language}
                </Typography>
              </div>
            </Fade>
          </Link>
          <Typography>{movie.title}</Typography>
        </div>
      ))}
    </Grid>
  );
};
