import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 75%;
    padding: 2rem 3rem;
    
    border-radius: 2.5rem;
    transform: translate(-50%, -50%);
    flex-direction: column;

    display: flex;
    align-items: center;

    background-color: #FFFFFF07;
    
    font-family: var(--text);
    color: var(--black);
    z-index: 2;   

    .loginSpan{
        margin-bottom: 3rem;
        align-self: center;

        color: var(--gray);
        
        font-style: normal;
        font-weight: 300;
        font-size: 4rem;
        
        cursor: default;

    }

    .auth-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20rem;
        padding: .7rem 0;
        align-self: center;
        background-color: rgba(255, 255, 255,.1);
        color: white;
        border: none;
        border-radius: 1rem;
            
        font-family: var(--text);
        font-size: 1.3rem;
        font-weight: 200;
     
        cursor: pointer;
        transition: all .2s ease-in-out;

        &:hover {    
            transform: scale(1.04);
            box-shadow: 0 0 2rem 0 rgba(255, 255, 255,.1);
            background:white;
            color: var(--black);
        }

        img {
            float: left;
            height: 35px;
            margin-right: 1rem;
        }
    }
`;
