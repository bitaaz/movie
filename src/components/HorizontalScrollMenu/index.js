import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from "../../images/no_image.jpg";
import Thumb from "../Thumb";
import { Fab, Fade, Grid, Typography } from "@material-ui/core";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
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

  const navigate = useNavigate();

  const tileData = gridItemsInfo.map((item) => ({
    img: item.poster_path
      ? IMAGE_BASE_URL + POSTER_SIZE + item.poster_path
      : NoImage,
    id: item.id,
    title: item.original_title,
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

  return (
    <Grid className={classes.root}>
      <Grid item xs={12} className={classes.title_grid}>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={{ pathname: "/see_all/" + title }}
          state={{ data: data }}
        >
          <Grid
            className={classes.title_see_all_grid}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <h1 style={{ marginRight: "6px" }}>{title}</h1>
            <Fade in={hover} timeout={400}>
              <body>
                See All <span style={{ fontWeight: "bold" }}>></span>
              </body>
            </Fade>
          </Grid>
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
            style={{ height: "330px", width: "200px", margin: "5px" }}
          >
            <Thumb clickable image={tile.img} movieId={tile.id} />
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
