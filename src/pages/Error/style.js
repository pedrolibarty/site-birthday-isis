import styled from "styled-components";

export const ErrorStyled = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-family: var(--font-poppins);
  h3 {
    width: 90%;

    font-size: 40px;
    text-align: center;
  }

  p {
    width: 90%;
    max-width: 600px;

    font-size: 30px;
    text-align: center;

    margin-top: 30px;
  }
`;
