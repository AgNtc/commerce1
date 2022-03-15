import styled from "styled-components";

export const SearchContainer= styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 12px;
    height: 35px;
    background: #ffffff;
    border: 2px solid #f5f5f5;
    box-sizing: border-box;
    border-radius: 4px;
    font-family: quicksand;
    width: 45vh;
`
export const SearchButton= styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    height: 100%;
    position: relative;
    left: 90%;
    outline: none;
`
export const InputSearch= styled.input`
    outline: none;
    border: none;
    width: 75%;
    height: 100%;
`