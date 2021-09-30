import styled from "styled-components";

export const Wrapper = styled.button`
  background: var(--darkGray);
  color: var(--white);
  text-align: center;
  display: block;
  width: 25%;
  min-width: 200px;
  height: 60px;
  margin: 20px auto;
  border-radius: 30px;
  font-size: var(--fontBig);
  transition: all 0.3s;
  outline: none;
  border: 0;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 1588px) {
    font-size: var(--fontMed);
  }

  @media screen and (max-width: 490px) {
    font-size: var(--fontSmall);
    width: 20%;
    min-width: 160px;
    height: 40px;
  }
`;
