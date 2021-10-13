import { useState, useEffect } from "react";
import API from "../../API";
//helpers
import { isPersistedState } from "../../helpers";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [topRatedMovies, setTopRatedMovies] = useState(initialState);
  const [upcomingMovies, setUpcomingMovies] = useState(initialState);
  const [nowPlayingMovies, setNowPlayingMovies] = useState(initialState);
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchedItem, setSearchedItem] = useState("");
  const [loadMore, setLoadMore] = useState(false);

  const fetchMovies = async (page, searchedItem = "") => {
    try {
      setError(false);
      setIsLoading(true);

      const movies = await API.fetchMovies(searchedItem, page);

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  const fetchTopRatedMovies = async (page) => {
    try {
      setError(false);
      setIsLoading(true);

      const topRatedMoviesApi = await API.fetchTopRatedMovies(page);

      setTopRatedMovies((prev) => ({
        ...topRatedMoviesApi,
        results:
          page > 1
            ? [...prev.results, ...topRatedMoviesApi.results]
            : [...topRatedMoviesApi.results],
      }));
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  const fetchUpcomingMovies = async (page) => {
    try {
      setError(false);
      setIsLoading(true);

      const upcomingMoviesApi = await API.fetchUpcomingMovies(page);

      setUpcomingMovies((prev) => ({
        ...upcomingMoviesApi,
        results:
          page > 1
            ? [...prev.results, ...upcomingMoviesApi.results]
            : [...upcomingMoviesApi.results],
      }));
    } catch (error) {
      setError(true);
    }

    setIsLoading(false);
  };

  const fetchNowPlayingMovies = async (page) => {
    try {
      setError(false);
      setIsLoading(true);

      const nowPlayingMoviesApi = await API.fetchNowPlayingMovies(page);

      setNowPlayingMovies((prev) => ({
        ...nowPlayingMoviesApi,
        results:
          page > 1
            ? [...prev.results, ...nowPlayingMoviesApi.results]
            : [...nowPlayingMoviesApi.results],
      }));
    } catch (error) {
      setError(true);
    }

    setIsLoading(false);
  };

  //initial and search
  useEffect(() => {
    if (!searchedItem) {
      const sessionState = isPersistedState("homeState");

      if (sessionState) {
        console.log("grabbing from session storage");
        setState(sessionState);
        return;
      }
    }
    console.log("grabbing from api");
    setState(initialState);
    fetchMovies(1, searchedItem);
  }, [searchedItem]);

  //top rated movies
  useEffect(() => {
    if (!searchedItem) {
      const sessionState = isPersistedState("topRated");

      if (sessionState) {
        console.log("top rated from session");
        setTopRatedMovies(sessionState);
        return;
      }
    }
    console.log("top rated from api");
    setTopRatedMovies(initialState);
    fetchTopRatedMovies(1);
  }, [searchedItem]);

  //now playing movie
  useEffect(() => {
    if (!searchedItem) {
      const sessionState = isPersistedState("nowPlaying");

      if (sessionState) {
        console.log("now playing from session");
        setNowPlayingMovies(sessionState);
        return;
      }
    }
    console.log("now playing from api");
    setNowPlayingMovies(initialState);
    fetchNowPlayingMovies(1);
  }, [searchedItem]);

  //upcoming movies
  useEffect(() => {
    if (!searchedItem) {
      const sessionState = isPersistedState("upcoming");

      if (sessionState) {
        console.log("upcoming from session");
        setUpcomingMovies(sessionState);
        return;
      }
    }
    console.log("upcoming from api");
    setUpcomingMovies(initialState);
    fetchUpcomingMovies(1);
  }, [searchedItem]);

  //load more
  useEffect(() => {
    if (!loadMore) return;

    fetchMovies(state.page + 1, searchedItem);
    setLoadMore(false);
  }, [loadMore, searchedItem, state.page]);

  //write to sessionStorage
  useEffect(() => {
    if (!searchedItem) {
      sessionStorage.setItem("homeState", JSON.stringify(state));
      sessionStorage.setItem("topRated", JSON.stringify(topRatedMovies));
      sessionStorage.setItem("upcoming", JSON.stringify(upcomingMovies));
      sessionStorage.setItem("nowPlaying", JSON.stringify(nowPlayingMovies));
    }
  }, [searchedItem, state, topRatedMovies, upcomingMovies, nowPlayingMovies]);

  return {
    topRatedMovies,
    upcomingMovies,
    nowPlayingMovies,
    state,
    isLoading,
    error,
    setSearchedItem,
    searchedItem,
    setLoadMore,
  };
};
