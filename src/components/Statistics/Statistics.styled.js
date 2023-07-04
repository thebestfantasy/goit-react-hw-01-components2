import { styled } from "styled-components";

export const ContainerStat = styled.section`
    padding: 0;
    margin: 0 auto;
    margin-top: 20px;
    width: 390px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    h2 {
        margin: 0;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        font-size: 24px;
    }

    ul {
        height: 80px;
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
    }

    li {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const Label = styled.span`
    color: white;
    margin-bottom: 5px;
`

export const Percentage = styled.span`
    color: white;
    font-size: 20px;
`