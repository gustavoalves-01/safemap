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
        transition: all .1s ease-in-out;
    &:hover{
        transform: scale (1.2);
    }
    }
    
    

`