import React, { useRef, useState } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
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

export default function SingleLineGridList({ gridItemsInfo, title }) {
  const classes = useStyles();
  const [leftButtonVisible, setLeftButtonVisible] = useState(false);
  const [rightButtonVisible, setRightButtonVisible] = useState(true);
  const [hover, setHover] = useState(false);

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

  return (
    <Grid className={classes.root}>
      <Grid xs={12} className={classes.title_grid}>
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            padding: "0",
            height: "50px",
            width: "300px",
            marginBottom: "20px",
          }}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          <h1>{title}</h1>
          {hover && (
            <Fade in={hover} style={{ transitionDuration: "0.4s" }}>
              <body
                style={{
                  marginLeft: "15px",
                  pointerEvents: "none",
                }}
              >
                See All <span style={{ fontWeight: "bold" }}>></span>
              </body>
            </Fade>
          )}
        </Grid>
      </Grid>

      <GridList
        className={classes.gridList}
        style={{ scrollBehavior: "smooth" }}
        ref={scrollRef}
      >
        {tileData.map((tile) => (
          <GridListTile
            key={tile.img}
            style={{ height: "330px", width: "200px", margin: "5px" }}
          >
            <Thumb key={tile.id} clickable image={tile.img} movieId={tile.id} />
            <Typography>{tile.title}</Typography>
          </GridListTile>
        ))}

        {leftButtonVisible && (
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
        )}
        {rightButtonVisible && (
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
        )}
      </GridList>
    </Grid>
  );
}
