import React from "react";
import PropTypes from "prop-types";
//style
import { Wrapper, Content } from "./Actor.styles";

const Actor = ({ name, role, image }) => (
  <Wrapper>
    <Content>
      <img src={image} alt="actor" />
      <h3>{name}</h3>
      <p>{role}</p>
    </Content>
  </Wrapper>
);

Actor.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  image: PropTypes.string,
};

export default Actor;
