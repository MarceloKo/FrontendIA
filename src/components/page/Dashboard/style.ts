import styled from "styled-components";

interface IImage {
    collapsed: boolean;
}
export const Image = styled.div<IImage>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    transition: 0.2s all;
    
    img{
    ${props => !props.collapsed ? '' : 'width: 70px; margin-bottom: 10px; '}
    }
`
export const HeaderRight = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right:40px;
    h3{
        color: white;
        background: #002140;
        padding: 0 10px;
        cursor: pointer;
    }
`