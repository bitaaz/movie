import React from "react";
import PropTypes from "prop-types";
//style
import { Wrapper, Content } from "./MovieInfoBar.styles";

const MovieInfoBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <span>Running Time: {time}</span>
      <span>Budget: {budget}</span>
      <span>Revenue: {revenue}</span>
    </Content>
  </Wrapper>
);

MovieInfoBar.propTypes = {
  time: PropTypes.string,
  budget: PropTypes.string,
  revenue: PropTypes.string,
};

export default MovieInfoBar;
