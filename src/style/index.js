import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: "Ubuntu",sans-serif;
    box-sizing: border-box;
    }
`;

export const theme = {
    BorderBottomInput: 'solid rgba(149,149,149,0.21) 1.5px'
};