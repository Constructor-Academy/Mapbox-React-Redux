import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: "Helvetica",serif;
    box-sizing: border-box;
    }
    body {
        background-color: #F8F8F8;
    }
`;

export const theme = {
    LinearGradient: 'linear-gradient(110deg, rgba(196,104,255,0.76), rgba(110,145,246,0.78))',
    LinearGradientHover: 'linear-gradient(110deg, rgba(201,60,243,0.76), rgba(71,109,226,0.78))',
    BorderBottomInput: 'solid rgba(149,149,149,0.21) 1.5px'

};