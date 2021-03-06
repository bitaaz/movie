import React from "react";
import PropTypes from "prop-types";
//style
import { Image } from "./Thumb.styles";

const Thumb = ({ image, height, width }) => (
  <div>
    <Image src={image} alt="movie-thumb" height={height} width={width} />
  </div>
);

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumb;
