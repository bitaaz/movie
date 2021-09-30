import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 100%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  color: var(--white);
  width: 100%;
  padding: 20px 40px;
  overflow: hidden;

  .rating-directors {
    display: flex;
    justify-content: flex-start;

    .score {
      display: flex;
      color: black;
      width: 35px;
      height: 35px;
      background: var(--white);
      align-items: center;
      margin-right: 60px;
      justify-content: center;
      border-color: var(--white);
      font-weight: 800;
      border-radius: 50%;
    }

    .director {
      margin-right: 50px;

      p {
        margin: 0;
      }
    }
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
