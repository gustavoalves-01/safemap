import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 75%;
    width: 27rem;
    height: 37rem;
    border-radius: 2.5rem;
    transform: translate(-50%, -50%);
    flex-direction: column;

    display: flex;
    align-items: center;

    background-color: var(--gray);
    box-shadow: 0 0 2rem .7rem #000;
    
    font-family: var(--text);
    color: var(--black);
    z-index: 2;
    

    .loginSpan{
        margin: 2.5rem auto 1rem;
        align-self: center;
        
        font-style: normal;
        font-weight: 300;
        font-size: 4rem;
        
        cursor: default;

    }
    .modal-content {
        width: 80%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;

        form {
            display: flex;
            flex-direction: column;
            text-align: center;

            input {
                margin: .5rem 0;
                padding: .7rem;
                border-radius: .8rem;
                border: none;
                background-color: #C4C4C4;
                width: 340px;
                height: 46px;
                color: var(--black);
                font-size: .9rem;
                font-family: var(--text);

                &:focus {
                    background-color: rgba(225, 225, 225, 1);
                    border: 2px solid var(--black);
                }
                

                ::placeholder,
                ::-webkit-input-placeholder {
                    font-weight: 600;
                    opacity: .7;
                }
                :-ms-input-placeholder {
                    font-weight: 600;
                    opacity: .7;
                }
            }

            .signin {
                margin: 1.2rem;
                width: 11rem;
                height: 2.8rem;
                align-self: center;

                background-color: var(--black);
                border-color: var(--black);
                border-radius: 50rem;
                
                font-family: var(--text);
                font-size: 1.3rem;
                font-weight: 700;
                color: var(--yellow);
                
                cursor: pointer;
                transition: all .2s ease-in-out;

                &:hover {
                    
                background-color: white;
                color: var(--black);
                }
            }

            .forgot-password {
                border: none;
                background: transparent;
                font-size: .8rem;
                font-weight: 200;
                color: #101820;
                text-decoration: none;
                transition: all .3s ease-in-out;

                &:hover{
                font-weight: 700;

                }
            }
        }

        .or {
            margin: 2rem 0;

            text-align: center;
            cursor: default;
            
            font-weight: 600;
            font-size: 1.5rem;

            &::before, ::after {
               position: absolute;
               content: '';
               height: 1.5px;
               width: 150px;
               margin: 1.2rem 2rem 0;
               right: 50%;
               background: var(--black);
               opacity: .3;
            }

            ::after {
                left: 50%;
            }
 
        }

        .signup {
            width: 14rem;
            height: 2.8rem;
            
            background-color: white;
            border: .15rem solid var(--black);
            border-radius: 50rem;
            
            align-self: center;
            
            color: var(--black);
            font-family: var(--text);
            font-size: 1.3rem;
            font-weight: 700;
            
            cursor: pointer;

            transition: all .2s ease-in-out;

            &:hover {
                background-color: var(--black);
                border-color: var(--black);
                color: var(--yellow);
            }
        }
    }

`;
