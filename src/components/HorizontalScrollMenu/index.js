import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from "../../images/no_image.jpg";
import Thumb from "../Thumb";
import { Fab, Fade, Grid, IconButton, Typography } from "@material-ui/core";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
  ThumbUp,
} from "@material-ui/icons";

import { useStyles } from "./HorizontalScrollMenu.styles";
import { ShowAllMovies } from "../ShowAllMovies";

export default function SingleLineGridList({
  gridItemsInfo,
  title,
  page,
  totalPages,
}) {
  const classes = useStyles();
  const [leftButtonVisible, setLeftButtonVisible] = useState(false);
  const [rightButtonVisible, setRightButtonVisible] = useState(true);
  const [hover, setHover] = useState(false);
  const [buttonsVisibleOnHover, setButtonsVisibleOnHover] = useState(false);
  const [detailsVisibleOnHover, setDetailsVisibleOnHover] = useState({
    isHovered: {},
  });

  const tileData = gridItemsInfo.map((item) => ({
    img: item.poster_path
      ? IMAGE_BASE_URL + POSTER_SIZE + item.poster_path
      : NoImage,
    id: item.id,
    title: item.original_title,
    vote_average: item.vote_average,
    likes: parseFloat((item.vote_average / 10) * 100).toPrecision(2),
    release_date: item.release_date ? item.release_date.substring(0, 4) : "",
    original_language: item.original_language,
  }));

  const scrollRef = useRef(null);

  const buttonsFadeOnHorizontalLimit = (scrollRef, direction) => {
    setTimeout(() => {
      if (
        (scrollRef.current.scrollLeft > 0 && direction === "right") ||
        (scrollRef.current.scrollLeft > window.innerWidth &&
          direction === "left")
      ) {
        setLeftButtonVisible(true);
      } else {
        setLeftButtonVisible(false);
      }
    }, 100);

    setTimeout(() => {
      if (
        scrollRef.current.scrollLeft >=
          window.innerWidth *
            ((210 * gridItemsInfo.length) / window.innerWidth - 2) &&
        direction === "right"
      ) {
        setRightButtonVisible(false);
      } else {
        setRightButtonVisible(true);
      }
    }, 100);
  };

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -=
        window.innerWidth - window.innerWidth / 10;
    } else if (direction === "right") {
      scrollRef.current.scrollLeft +=
        window.innerWidth - window.innerWidth / 10;
    }

    buttonsFadeOnHorizontalLimit(scrollRef, direction);
  };

  const data = {
    title: title,
    tileData: tileData,
    page: page,
    totalPages: totalPages,
  };

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
    <Grid className={classes.root}>
      <Grid item xs={12} className={classes.title_grid}>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={{ pathname: "/see_all/" + title }}
          state={{ data: data }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={classes.title_see_all_link}
        >
          <h1 style={{ marginRight: "6px" }}>{title}</h1>
          <Fade in={hover} timeout={400}>
            <body>
              See All <span style={{ fontWeight: "bold" }}>></span>
            </body>
          </Fade>
        </Link>
      </Grid>

      <ImageList
        className={classes.gridList}
        style={{ scrollBehavior: "smooth" }}
        ref={scrollRef}
        onMouseEnter={() => setButtonsVisibleOnHover(true)}
        onMouseLeave={() => setButtonsVisibleOnHover(false)}
      >
        {tileData.map((tile) => (
          <ImageListItem
            key={tile.id}
            style={{
              height: "400px",
              width: "200px",
              margin: "5px",
            }}
          >
            <Link to={`/${tile.id}`}>
              <div
                style={{
                  position: "relative",
                }}
                onMouseEnter={() => handleMouseEnter(tile.id)}
                onMouseLeave={() => handleMouseLeave(tile.id)}
              >
                <Thumb
                  clickable
                  image={tile.img}
                  movieId={tile.id}
                  height="300px"
                />
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
                      color: "black",
                      left: "20%",
                      top: "90%",
                      transform: "translateX(-50%)",
                      cursor: "pointer",
                    }}
                  >
                    <Typography
                      style={{ fontSize: "12px", fontWeight: "bolder" }}
                    >
                      {tile.release_date} - {tile.original_language}
                    </Typography>
                  </div>
                </Fade>
              </div>
            </Link>

            <Typography>{tile.title}</Typography>
          </ImageListItem>
        ))}

        {leftButtonVisible && (
          <Fade in={buttonsVisibleOnHover} timeout={300}>
            <Grid
              style={{
                alignItems: "center",
                display: "flex",
                height: "330px",
              }}
            >
              <Fab
                className={classes.fab}
                style={{
                  left: "0",
                }}
                onClick={() => scroll("left")}
              >
                <ArrowBackIosRounded className={classes.arrow_button} />
              </Fab>
            </Grid>
          </Fade>
        )}
        {rightButtonVisible && (
          <Fade in={buttonsVisibleOnHover} timeout={300}>
            <Grid
              style={{
                alignItems: "center",
                display: "flex",
                height: "330px",
              }}
            >
              <Fab
                className={classes.fab}
                style={{
                  right: "0",
                }}
                onClick={() => scroll("right")}
              >
                <ArrowForwardIosRounded className={classes.arrow_button} />
              </Fab>
            </Grid>
          </Fade>
        )}
      </ImageList>
    </Grid>
  );
}
