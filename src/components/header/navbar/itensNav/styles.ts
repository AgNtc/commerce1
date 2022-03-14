import styled from "styled-components";

export const ItensNavContainer= styled.div `
    padding: 0px 6vw;
    border-top: 2px solid #f5f5f5;
    background-color: #fafafa;
    height: 7vh;
    max-width: 100%;
`
export const AllCategorias= styled.div`
    height: 31%;
    display: flex;
    align-items: center;
    /* Border */
    border-right: 2px solid #f5f5f5;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 48px;
`
export const ItemCategoria= styled.nav`
    font-family: quicksand;
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    color: #333333;
    text-decoration: none;
    margin-left: 16px;
    margin-right: 16px;
`
export const ItensCategoria = styled.select`
    height: 20vh;
    padding-left: 15px;
    font-family: quicksand;
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 60px;
    color: #333333;
    border: none;
    background: none;
`