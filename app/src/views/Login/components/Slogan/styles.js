import styled from 'styled-components';

export const Container = styled.div`
    color: var(--gray);
    font-family: var(--text);
    display: flex;
    flex-direction: column;
   
    .text {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 32%;
        top: 15%;
        left: 15%;
          
       
        #first-line{
            font-size: 3.5rem;
            font-weight: 700;
            
        }
        #second-line {
            font-size: 3.5rem;
            font-weight: 200;
            
            img{
                height: 3rem;
            }
        }
    }

    #map {
        position: absolute;
        width: 35rem;
        top: 65%;
        left: 35%;
        transform: translate(-50%, -50%);   
    }


`;
