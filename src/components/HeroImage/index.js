import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Grid } from "@material-ui/core";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

import PropTypes from "prop-types";
//style
import { useStyles, contentStyle } from "./HeroImage.styles";
import NoImage from "../../images/no_image.jpg";
import { isMobile } from "react-device-detect";

// import { Wrapper, Content, Text } from "./HeroImage.styles";

function HeroImage(props) {
  // const HeroImage = ({ image, title, text }) => (
  //   <Wrapper image={image}>
  //     <Content>
  //       <Text>
  //         <h1>{title}</h1>
  //         <p>{text}</p>
  //       </Text>
  //     </Content>
  //   </Wrapper>
  // );

  const classes = useStyles();

  const items = props.heros.map((hero) => ({
    name:
      hero.original_title.length > 25
        ? hero.original_title.substring(0, 25).concat("...")
        : hero.original_title,
    description: hero.overview.substring(0, 250).concat("..."),
    image: hero.backdrop_path
      ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${hero.backdrop_path}`
      : NoImage,
  }));

  return (
    <Grid className={classes.carousel_div}>
      <Carousel
        autoPlay
        indicatorContainerProps={{
          style: {
            background: "rgba(0,0,0,0)",
            padding: "5px 0",
          },
        }}
        indicatorIconButtonProps={{
          style: {
            margin: "0 8px",
          },
        }}
        fullHeightHover={false}
        navButtonsProps={{
          style: {
            padding: "7px",
            color: "black",
            background: "#BDBDBD",
            display: isMobile ? "none" : "",
          },
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Grid>
  );
}
function Item(props) {
  const classes = contentStyle();

  return (
    <Paper
      className={classes.paper}
      style={{
        backgroundImage: `url(${props.item.image})`,
      }}
    >
      <Grid container className={classes.container}>
        <div className={classes.container_div}>
          <h1 className={classes.title}>{props.item.name}</h1>
          <p className={classes.overview}>{props.item.description}</p>
        </div>
      </Grid>
    </Paper>
  );
}
HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default HeroImage;
