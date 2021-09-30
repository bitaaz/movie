import React from "react";
import { Link } from "react-router-dom";
//images
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
//styles
import {
  Wrapper,
  Content,
  TMDBLogoImage,
  RMDBLogoImage,
} from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <RMDBLogoImage src={RMDBLogo} alt="rmdb-logo" />
      </Link>
      <TMDBLogoImage src={TMDBLogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;
