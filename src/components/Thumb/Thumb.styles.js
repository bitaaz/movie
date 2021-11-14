import styled from "styled-components";

export const Image = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-width: 720px;
  transition: all 0.35s;
  object-fit: cover;
  border-radius: 20px;
  background: dimgray;
  animation: animateThumb 0.5s;

  //:hover {
  //  opacity: 0.2;
  //}

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
