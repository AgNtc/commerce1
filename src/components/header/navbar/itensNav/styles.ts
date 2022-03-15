import styled from "styled-components";

export const ItensNavContainer= styled.div `
    padding: 0px 6vw;
    background-color: #fafafa;
    height: 7vh;
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
    display: flex;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
`
export const AllCategorias= styled.div`
    height: 25%;
    display: flex;
    align-items: center;
    /* Border */
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 48px;
    border-right: 2px solid #f5f5f5;
`
export const ItemCategoria= styled.nav`
    display: flex;
    justify-content: center;
    padding: 1.5% 15% 0% 15%;
`
export const ItensCategoria = styled.select`
    height: 5vh;
    padding-left: 15px;
    font-family: quicksand;
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 60px;
    color: #333333;
    border: none;
    background: none;
    outline: none
`   
export const FonteCategorias= styled.a`
    font-family: quicksand;
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    color: #333333;
    text-decoration: none;
    margin-left: 20px;
    margin-right: 20px;
`
export const MarcaEsquerda= styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
    border-left: 2px solid #f5f5f5
`

export const FontMarca= styled.p`
    font-family: quicksand;
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    color: #333333;
    text-decoration: none;
    margin-left: 20px;
    margin-right: 20px;
`