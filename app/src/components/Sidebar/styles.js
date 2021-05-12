import styled from 'styled-components';

export const Container = styled.aside`
    display: flex;
    flex-direction: column-reverse;
    width: 35vw;
    height: 100vh;
    position: absolute;
    background-color: #FFFFFF;
    align-items: center;
    box-shadow: 0 0 50px #00000070;
    z-index: 10;

    .place-details {
        justify-content: center;
        display: grid;
        grid-template-columns: 20vw 200px;
        grid-template-rows: auto 2rem 2rem 2rem auto;
        font-family: var(--text);       
        text-align: end;
        gap: 0 2rem;
        margin-bottom: 5rem;

        h1 {
            font-size: 1.7rem;
            grid-column: 1/2;
            font-weight: 700;
            align-self: end;
        }

        span {
            font-size: 1.2rem;
            grid-column: 1/2;
            font-weight: 300;
        }

        img {
            clip-path: inset(10%, 10%, 10%, 10%);
            height: 200px;
            width: 200px;
            grid-column: 2/3;
            grid-row: 1/6;
        }
    }
  
`;
