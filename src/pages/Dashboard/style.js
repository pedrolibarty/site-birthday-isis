import styled from "styled-components";

export const DashboardStyled = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--color-primary);

  .box-image {
    height: 600px;
    width: 70%;
    max-width: 1000px;

    overflow: hidden;

    position: relative;

    img {
      width: 90%;
      position: absolute;
      left: 0px;
      top: -40%;
    }
  }

  .container {
    width: 30%;
    max-width: 600px;
    min-width: 350px;
    height: 350px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    background-color: var(--color-secundary);

    border-radius: 5px;

    position: absolute;
    right: 100px;

    .alga {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-top: 10px;

      width: 100%;

      img {
        width: 70px;
      }

      h1 {
        font-size: 40px;
        font-family: "Sacramento";
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 15px;

      width: 90%;

      li {
        display: flex;
        align-items: center;
        gap: 10px;

        font-size: 18px;

        img {
          width: 30px;
        }
      }

      #locate {
        align-items: flex-start;

        text-decoration: underline;
        color: var(--color-black);
      }

      a:visited {
  color: inherit;
}
    }
  }

  @media (max-width: 840px) {
    flex-direction: column;

    .box-image {
      position: static;

      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        position: relative;

        width: 100%;
        min-width: 800px;

        top: 0px;
      }
    }

    .container {
      width: 95%;
      max-width: none;
      min-width: 0px;

      position: relative;

      margin-top: -120px;
      margin-bottom: 30px;
      right: 0px;
    }
  }

  @media (max-width: 375px) {
    .container {
      .header {
        img {
          width: 50px;
        }

        h1 {
          font-size: 38px;
        }
      }
    }
  }
`;
