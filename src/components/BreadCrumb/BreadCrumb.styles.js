import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--medGray);
  color: var(--white);
  height: 70px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Content = styled.div`
  padding: 0 20px;
  width: 100%;
  display: flex;
  max-width: var(--maxWidth);
  font-size: var(--fontMed);

  span {
    .home-link {
      text-decoration: none;
    }
    color: var(--white);
    padding-right: 10px;
  }
  @media screen and (max-width: 720px) {
    font-size: var(--fontSmall);
  }
`;
