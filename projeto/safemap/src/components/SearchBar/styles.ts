import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;


div { 
    background-color: #FFF;
    display: flex;
    border: transparent;
    width: 40vw;
    height: 1.2rem;
    padding: .3rem 1rem;
    border-radius: 50px;
    align-items: center;
    z-index: 2;

        input { 
        float: left;
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;     
        }
        img { 
        height: 100%;
        object-fit: contain;
        }
}
        button { 
        font-size: 1rem;
        margin-left: -1.5rem;
        border-radius: 1rem;
        border: none;
        padding: .35rem .8rem .35rem 2rem;
        z-index: 1;
        
        color: #FFF;
        background-color: var(--purple);

        &&:hover{
            background-color: #AC84FA;
        }
        }



`
