import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
//style
import { Wrapper, Content, Image } from "./SearchBar.styled";
//image
import SearchIcon from "../../images/search-icon.svg";

const SearchBar = ({ setSearchedItem }) => {
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
    <Wrapper>
      <Content>
        <Image src={SearchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  setSearchedItem: PropTypes.func,
};

export default SearchBar;
