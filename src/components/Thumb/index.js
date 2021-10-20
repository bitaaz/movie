import React from "react";
import PropTypes from "prop-types";
//style
import { Image } from "./Thumb.styles";

import { Link } from "react-router-dom";

const Thumb = ({ image, movieId, clickable, height }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb" height={height} />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
  </div>
);

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumb;
