import styled from "styled-components";


export const ContainerInicio = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    flex-wrap: wrap;
    p{
        margin-bottom: 0;
    }
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    min-width: 250px;
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    background: #181A2D;
    color: white !important;
    
`
export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    height: 200px;
    h3{
        width: 100%;
        text-align: center;
        margin: auto;
    }
`

export const Informations = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    border-top: 1px solid #26262625;
` 
export const InformationsRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    /* border-bottom: 1px solid #26262625; */
` 
