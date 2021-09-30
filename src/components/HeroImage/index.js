import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Container, Grid } from "@material-ui/core";

import PropTypes from "prop-types";
//style
import { useStyles, contentStyle } from "./HeroImage.styles";
import styles from "./HeroImage.css";
// import { Wrapper, Content, Text } from "./HeroImage.styles";

import NoImage from "../../images/no_image.jpg";

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

  var items = [
    {
      name: props.title[0],
      description: props.text[0],
      image: props.image[0],
    },
    {
      name: props.title[1],
      description: props.text[1],
      image: props.image[1],
    },
    {
      name: props.title[2],
      description: props.text[2],
      image: props.image[2],
    },
    {
      name: props.title[3],
      description: props.text[3],
      image: props.image[3],
    },
    {
      name: props.title[4],
      description: props.text[4],
      image: props.image[4],
    },
    {
      name: props.title[5],
      description: props.text[5],
      image: props.image[5],
    },
  ];
  return (
    <Grid className={classes.crousel_div}>
      <Carousel
        autoPlay
        fullHeightHover={false}
        navButtonsProps={{
          style: {
            padding: "7px",
            color: "black",
            background: "#BDBDBD",
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
