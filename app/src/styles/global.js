import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --purple: #AC84FF;
    --yellow: #F9A826;

    --black: #101820;
    --gray: #E6E6E6;
   
}

html {
    background-color: var(--gray);
}
`