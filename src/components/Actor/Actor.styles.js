import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGray);
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const Content = styled.div`
  margin: 0 auto;
  text-align: center;
  color: var(--white);
  width: 100%;
  transition: all 0.3s;

  :hover {
    opacity: 0.8;
  }

  img {
    background-size: contain;
    background-position: center;
    width: 200px;
    height: 250px;
    margin-top: 5px;
    border-radius: 20px;
  }
  h3 {
    margin: 0;
  }
  p {
    padding: 0 10px;
  }
`;
