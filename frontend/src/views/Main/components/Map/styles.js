import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    float: right;
    justify-content: center;

    .map {
        position: relative;
        margin: 0;       
    }

    .pesquisa {
        position: absolute;
        top: .5rem;
    }

`

export const SearchContainer = styled.div`
    input {
        width: 55vw;
        background-color: rgba(235,235,235,.9);
        border: none;
        
        border-radius: 50px;
        box-shadow: .1rem .1rem .5rem rgba(16,24,32,.5);

        padding: .7rem 2.3rem;

        font-size: 1.3rem;
        font-family: var(--text);
        font-weight: 500;
        color: rgba(0,0,0,.4);        
        transition: all .4s ease-in-out;
            &:hover {
                transform: scale(1.03);
                background-color: rgba(235,235,235,.95);
                color: rgba(0,0,0,.7)
            }
    
            &:focus {
                transform: scale(1.05);
                background-color: rgba(235,235,235,.95);
                color: rgba(0,0,0,.7)
            }
        }

        .lista {
            background-color: rgba(235,235,235,.925);
            border-radius: 1rem;
            padding: 1rem 2rem 1rem;
            
            list-style-type: none;
            box-shadow: .1rem .1rem .5rem rgba(16,24,32,.5);

        }

        .item {
            font-size: 1rem;
            font-family: var(--text);
            font-weight: 300;
            line-height: 1.5rem;
            opacity: .5;
            transition: all .2s ease-in-out;

            &:hover{
            transform: scale(1.01);
            opacity: 1;
            cursor: pointer;
            }
        }
`