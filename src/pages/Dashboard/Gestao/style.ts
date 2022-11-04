import styled from "styled-components";

export const ContainerGestao = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin: 20px;
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 350px;
    min-width: 215px;
    position: relative;
    padding-bottom: 60px;
    p{
        font-weight: bold;
    }
    button{
        position: absolute;
        bottom: 10px;
    }
`