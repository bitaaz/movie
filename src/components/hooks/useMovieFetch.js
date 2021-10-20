import { useState, useEffect } from "react";
import API from "../../API";
//helpers
import { isPersistedState } from "../../helpers";

const initialState = {
  actors: [],
  adult: false,
  backdrop_path: "",
  belongs_to_collection: {},
  budget: 0,
  directors: [],
  genres: [],
  homepage: "",
  id: 0,
  imdb_id: 0,
  original_language: "",
  originial_title: "",
  overview: "",
  popularity: "",
  poster_path: "",
  production_companies: [],
  production_countries: [],
  release_date: "",
  revenue: 0,
  runtime: 0,
  spoken_language: [],
  status: "",
  tagline: "",
  title: "",
  video: false,
  vote_average: 0,
  vote_count: 0,
};

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setError(false);
        setLoading(true);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        //get directors only
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistedState(movieId);

    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchMovie();
  }, [movieId]);

  //write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [state, movieId]);

  return { state, loading, error };
};
