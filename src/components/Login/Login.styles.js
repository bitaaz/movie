import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 10px;
  max-width: 320px;

  label {
    display: block;
    margin: 10px;
  }
  input {
    border-radius: 20px;
    border-width: 1px;
    padding: 5px 10px;
    width: 100%;
    outline: none;
  }
  .error {
    color: red;
    text-align: center;
  }
`;
