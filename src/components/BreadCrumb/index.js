import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//styles
import { Wrapper, Content } from "./BreadCrumb.styles";

const BreadCrumb = ({ title }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span className="home-link">Home</span>
      </Link>
      <span> | </span>
      <span>{title}</span>
    </Content>
  </Wrapper>
);

BreadCrumb.propTypes = {
  title: PropTypes.string,
};

export default BreadCrumb;
