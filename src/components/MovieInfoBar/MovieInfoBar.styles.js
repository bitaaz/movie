import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background: var(--darkGray);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;
  color: var(--white);

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--medGray);
    border-radius: 20px;
    padding: 20px 0;
    margin: 0 20px;
    flex: 1;

    :first-child {
      margin-left: 0;
    }
    :last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;

    span {
      margin: 20px 0;
    }
  }
`;
