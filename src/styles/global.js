import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        background: ${({ theme }) => theme.background};
        transition: margin 0.30s linear, width 0.30s linear, color 0.5s linear, background-color 0.5s linear;
        // color: ${({ theme }) => theme.text};
        text-decoration: none;
        margin: 0;
    }
`;

export default GlobalStyle;
