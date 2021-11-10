import React from "react";
import { useParams } from "react-router-dom";
//helpers
import { calcTime, convertMoney } from "../helpers";
//components
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Grid from "./Grid";
import Actor from "./Actor";
import Spinner from "./Spinner";
//hooks
import { useMovieFetch } from "./hooks/useMovieFetch";
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
//noImage
import NoImage from "../images/no_image.jpg";
import Navbar from "./Navbar";
import { Footer } from "./Footer/Footer";

const Movie = () => {
  const { movieId } = useParams();

  const { state, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  // console.log(state);
  return (
    <>
      <Navbar />
      <BreadCrumb title={state.original_title} />
      <MovieInfo movie={state} />
      <MovieInfoBar
        time={calcTime(state.runtime)}
        revenue={convertMoney(state.revenue)}
        budget={convertMoney(state.budget)}
      />
      <Grid header="Actors">
        {state.actors.map((actor) => (
          <Actor
            key={actor.id}
            name={actor.name}
            image={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
            role={actor.character}
          />
        ))}
      </Grid>
      <Footer />
    </>
  );
};

export default Movie;
