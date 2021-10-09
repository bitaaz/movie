import React, { useRef } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../../config";
import NoImage from "../../images/no_image.jpg";
import Thumb from "../Thumb";
import {Box, Button, Fab, FormControlLabel, Grid, Paper, Slide, Switch, Typography, useTheme} from "@material-ui/core";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";

import { useStyles } from "./HorizontalScrollMenu.styles";

const icon = (
    <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
        <Box component="svg" sx={{ width: 100, height: 100 }}>
            <Box
                component="polygon"
                sx={{
                    fill: (theme) => theme.palette.common.white,
                    stroke: (theme) => theme.palette.divider,
                    strokeWidth: 1,
                }}
                points="0,100 50,00, 100,100"
            />
        </Box>
    </Paper>
);

export default function SingleLineGridList({ gridItemsInfo, title }) {
  const classes = useStyles();

  const tileData = gridItemsInfo.map((item) => ({
    img: item.poster_path
      ? IMAGE_BASE_URL + POSTER_SIZE + item.poster_path
      : NoImage,
    id: item.id,
    title: item.original_title,
  }));


  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -=
            (window.innerWidth - window.innerWidth / 10)/2
        setTimeout(() => {scrollRef.current.scrollLeft -=
            (window.innerWidth - window.innerWidth / 10)/2;}, 50)

    }
    if (direction === "right") {
        scrollRef.current.scrollLeft +=
            (window.innerWidth - window.innerWidth / 10)/2
        setTimeout(() => {scrollRef.current.scrollLeft +=
            (window.innerWidth - window.innerWidth / 10)/2;}, 50)

    }
  };

  return (
    <Grid className={classes.root}>
      <Grid xs={12} className={classes.title_grid}>
        <h1>{title}</h1>
      </Grid>

      <GridList className={classes.gridList} ref={scrollRef}>
          {tileData.map((tile) => (
              <GridListTile
                  key={tile.img}
                  style={{ height: "330px", width: "200px", margin: "5px" }}
              >
                <Thumb key={tile.id} clickable image={tile.img} movieId={tile.id} />
                <Typography>{tile.title}</Typography>
              </GridListTile>
          ))}

          <Grid
              style={{ alignItems: "center", display: "flex", height: "330px" }}
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
        </GridList>
    </Grid>


  );
}
