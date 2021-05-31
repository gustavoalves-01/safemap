import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 35vw;
    height: 100vh;
    position: absolute;
    background-color: #FFFFFF;
    align-items: center;
    box-shadow: 0 0 50px #00000070;
    z-index: 10;

    header {
        color: var(--black);
        margin: 3rem auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: var(--text);

        h1 {
            font-size: 1.5rem;
            font-weight: 200;
        }

        #signout{
            font-size: 1.1rem;
            border: none;
            font-weight: 200;
            cursor: pointer;
            text-decoration: none;
            color: var(--black);
            opacity: .3;
            transition: all .2s ease-in-out;
            &:hover {
                opacity: .7;
                font-weight: 700;
            }
        }
    }
`
export const ContainerEmpty = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0 8rem;
    height: 100%;

    img {
        height: 60%;
        margin-bottom: 3rem;
    }

    h1 {
        font-family: var(--text);
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        padding: 0 3rem;
        color: var(--purple);
        
        b {
            color: var(--yellow);
        }
    }

`

export const ContainerMain = styled.aside`
    .density-info {
        display: flex;
        flex-direction: column;
        font-family: var(--text);
        align-items: center;

        #linha-horizontal {
        width: 30vw;
        margin: 2rem auto;
        border: 1px solid #00000030;
        }

        span {
            font-weight: 300;
            font-size: 1.2rem;
        }

        h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        h2 {
            padding: .5rem 1.5rem;
            border-radius: 5rem;
            transition: all .2s ease-in-out;
            margin: 1.5rem 0;

            &:hover {
                filter: brightness(.9);
                transform: scale(1.05);
            }
        }

        .low {
            background-color: var(--low);
            color: white;
        }

        .medium {
            background-color: var(--yellow);
            color: white;
        }

        .high {
            background-color: var(--high);
            color: white;
        }       
    }

    .place-details {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: repeat(5, auto);
        text-align: end;
        align-items: center;
        font-family: var(--text);   
        gap: 0 2rem;
        margin: 0 4rem;
        max-height: 30vh;

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
            min-height: 100%;
            max-height: 140%;
            object-fit: fill;
           }
        }

        a {
            text-decoration: none;
            align-self: end;
            margin-left: 5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            padding: .5rem .5rem;
            border-radius: 50px;
            grid-row: 5/6;

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

    .confirm {
        display: flex;
        justify-content: center;
        margin: 3.5rem auto;

        button{
        background-color:var(--purple);
        border-radius: 50px;
        border: none;
        box-sizing: border-box;
        padding: 1rem 3rem;
        
        font-family: var(--text);
        font-size: 1.5rem;
        font-weight: 600;
        color: white;
        transition: all .2s ease-in-out;
        &:hover {
            background-color: var(--yellow);
        }
    }
    }
`;
