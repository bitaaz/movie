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
    }
  }, [searchedItem, state]);

  return {
    state,
    isLoading,
    error,
    setSearchedItem,
    searchedItem,
    setLoadMore,
  };
};
