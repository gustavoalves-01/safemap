import styled from 'styled-components'

export const Container = styled.div`   
    display: flex;
    align-items: center;
    justify-content: center;
    

    div { 
        position: relative;
        background-color: #FFF;
        display: flex;
        border: transparent;
        width: 45vw;
        height: 1.2rem;
        padding: 1rem;
        border-radius: 50px;
        align-items: center;
        z-index: 2;
        transition: all .3s ease-in-out;
        &:hover {
            transform: scale(1.02);
            
        } 
    }
    
        input {
        width: 100%;
        background-color: transparent;
        border: none;   
        }
        img { 
        height: 1em;
        }
        button { 
        font-size: 1rem;
        margin-left: -1.5rem;
        border-radius: 1rem;
        border: none;
        padding: .35rem .8rem .35rem 2rem;
        
        color: #FFF;
        background-color: var(--purple);
        transition: all .3s ease-in-out;
        &:hover{
            background-color: var(--yellow);
            cursor: pointer;
        }
    }
   
`
