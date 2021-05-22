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
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: auto auto 2rem 2rem auto;
        text-align: end;
        align-items: center;
        font-family: var(--text);   
        gap: 0 2rem;
        margin: 0 4rem 5rem;

        h1 {
            font-size: 1.7rem;
            grid-column: 1/2;
            font-weight: 700;
            align-self: end;
        }

        span {
            font-size: .9rem;
            grid-column: 1/2;
            font-weight: 300;
        }

        #address {
            word-wrap: break-word;
            word-break: break-all;

        }

        .image-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 25vh;
            height: 25vh;
            grid-column: 2/3;
            grid-row: 1/6;
            overflow: hidden;
            border-radius: 25px;
            box-shadow: 0 0 40px #00000030;

           img {
            height: 100%;
            object-fit: contain;
           }
        }

        button {
            align-self: end;
            margin-left: 5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            padding: .5rem .5rem;
            border-radius: 50px;

            background-color:var(--black);
            color: var(--gray);
            font-family: var(--text);
            border: none;
            box-sizing: border-box;

            transition: all .2s ease-in-out;

            img {
                width: 2rem;
                margin-right: .8rem;
            }

            &:hover {
                background-color: transparent;
                color: var(--black);
                box-shadow: inset 0 0 0 3px var(--black);
            }
        }
    }
     
        
    
  
`;
