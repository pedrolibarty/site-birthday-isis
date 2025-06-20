import styled from "styled-components";

export const LoadingStyled = styled.section`
width: 100%;
height: 100vh;
background-color: var(--color-secundary);

.circle{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 150px;
        height: 150px;
        background: #ccc;
        border: 5px solid var(--color-primary);
        border-radius: 50%;
        overflow: hidden;
    }
    .wave{
        position: relative;
        width: 100%;
        height: 100%;
        background: var(--color-primary);
        border-radius: 50%;
        box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
    }
    .wave:before,
    .wave:after
    {
        content: '';
        position: absolute;
        width: 200%;
        height: 200%;
        top: 0;
        left: 50%;
        transform: translate(-50%, -75%);
    }
    .wave:before{
        border-radius: 45%;
        background: rgba(255, 255, 255, 1);
        animation: animate 5s linear infinite;
    }
    .wave:after{
        border-radius: 40%;
        background: rgba(255, 255, 255, .5);
        animation: animate 10s linear infinite;
    }
    @keyframes animate{
        0%{
            transform: translate(-50%, -75%) rotate(0deg);
        }
        100%{
            transform: translate(-50%, -75%) rotate(360deg);
        }
    }
`