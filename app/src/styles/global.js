import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
&:focus{
    border: none;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}
}

:root {
    --purple: #AC84FF;
    --yellow: #F9A826;

    --low: #009A44;
    --medium: #F6EB61;
    --high: #D6001C;

    --black: #101820;
    --gray: #E6E6E6;

    --text: 'Poppins', sans-serif;
   
}

html {
    /* background-color: var(--gray); */
}
`