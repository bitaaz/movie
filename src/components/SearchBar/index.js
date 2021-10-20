import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";

const MovieSearchBar = ({ setSearchedItem }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchedItem(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchedItem, state]);

  return (
    <>
      <Grid
        container
        justifyContent="center"
        style={{
          padding: "20px",
          background: "#222222",
        }}
      >
        <SearchBar
          value={state}
          onChange={(newValue) => setState(newValue)}
          style={{
            width: "70%",
            background: "#E0E0E0",
            borderRadius: "20px",
          }}
          placeholder="Search Movies..."
        />
      </Grid>

      {/*<Wrapper>*/}
      {/*  <Content>*/}
      {/*<Image src={SearchIcon} alt="search-icon" />*/}
      {/*<input*/}
      {/*  type="text"*/}
      {/*  placeholder="Search Movie"*/}
      {/*  onChange={(event) => setState(event.currentTarget.value)}*/}
      {/*  value={state}*/}
      {/*/>*/}
      {/*  </Content>*/}
      {/*</Wrapper>*/}
    </>
  );
};

MovieSearchBar.propTypes = {
  setSearchedItem: PropTypes.func,
};

export default MovieSearchBar;
