import styled from "styled-components";

export const ManagerStyled = styled.section`

display: flex;
flex-direction: column;
align-items: center;

.status {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;

    margin-top: 10px;

    li {
        width: 130px;

        display: flex;
        flex-direction: column;

        border: 1px solid var(--color-primary);
        border-radius: 5px;

        h3 {
            margin: 10px;
        }
    }

    .row {
        display: flex;
        justify-content: space-between;

        margin: 0px 10px 10px 10px;
    }

    .line {
        border: 1px solid var(--color-primary);
    }
}


.convites {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 20px;
}

.convite-line {
    width: 90%;
    max-width: 550px;
}

.container {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--color-primary);
    border-radius: 5px;
}

.content {
    width: 80%;
    height: 44px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.send {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-size: 10px;
    }

    margin: 5px 0px;
}

.box {
    width: 30px;
    height: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--color-primary);
    border-radius: 5px;
}

.companion {
    display: flex;
    flex-direction: column;
    gap: 5px;

    margin: 7px 0px 0px 10px;
}
`