import React, { useState } from "react";
import PropTypes from "prop-types";

//styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";
//components
import Thumb from "../Thumb";
import Rate from "../Rate";
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
//image
import NoImage from "../../images/no_image.jpg";
//context
import { useAuth } from "../../contexts/AuthContext";
import API from "../../API";
import { ThumbDown, ThumbDownAlt, ThumbUpAlt } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const MovieInfo = ({ movie }) => {
  const { currentUser } = useAuth();

  return (
    <>
      <Wrapper backdrop={movie.backdrop_path}>
        <Content>
          <Thumb
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            clickable={false}
            alt="movie-thumb"
          />
          <Text>
            <h1>{movie.title}</h1>
            <h3>PLOT</h3>
            <p>{movie.overview}</p>

            <div className="rating-directors">
              <div>
                <h3>RATING</h3>
                <div className="score">{movie.vote_average}</div>
              </div>
              <div className="director">
                <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
                {movie.directors.map((director) => (
                  <p key={director.credit_id}>{director.name}</p>
                ))}
              </div>
            </div>
            {currentUser && (
              <div>
                <Rate movieId={movie.id} email={currentUser.email} />
              </div>
            )}
          </Text>
        </Content>
      </Wrapper>
    </>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;
