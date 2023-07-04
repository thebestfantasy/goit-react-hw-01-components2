import { styled } from "styled-components";

export const Container = styled.div`
    background-color: #f7f0f0;
    width: 390px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 20px;

    img {
        display: flex;
        width: 200px;
        margin-right: auto;
        margin-left: auto;
        border-radius: 50%;
    }
` 

export const Name = styled.p`
    font-size: 24px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 12px;
`

export const Social = styled.p`
    font-size: 18px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    margin-top: 0px;
    margin-bottom: 12px;
`
export const List = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;
    margin: 0;
    padding: 0;
`

export const ListItem = styled.li`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 100px;
    flex-direction: column;
    border: 1px solid gray;
`

export const BoxListItem = styled.div`
  display: flex;
  flex-direction: column;
`



export const Quantity = styled.span`
    font-weight: 700;
    margin-right: auto;
    margin-left: auto;
    margin-top: 5px;
`

export const Label = styled.span`
    font-weight: 500;
    margin-right: auto;
    margin-left: auto;
`

export const Stats = styled.div`
    border-top: 1px solid gray;
    background-color: lightgray;
`

