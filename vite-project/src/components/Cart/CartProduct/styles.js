import styled from "styled-components";

export const CartItem = styled.li`
    display: flex;
    align-items: center;
    height: 80px;
    margin-bottom: 1.25rem;
    padding: 0 0.75rem;
    width: auto;
    background-color: var(--gray-0);
    gap: 0.75rem;

    figure {
        background-color: var(--gray-20);
        border-radius: 5px;
        height: 100%;
        
        img {
            object-fit: cover;
            height: 80px;
        }
    }

    .cardInfo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        padding: 2rem 0.625rem;
        height: 100%;
        width: 80%;

        h4 {
            font-size: var(--font-size-3);
            font-weight: var(--font-weight-1);
            color: var(--gray-100);
            line-height: 24px;
            margin-bottom: 10px;
        }

        p {
            font-size: var(--font-size-5);
            font-weight: var(--font-weight-3);
            color: var(--gray-50);
            line-height: 16px;
        }
    }

    .cardAmount {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 20%;

        h5 {
            color: var(--gray-50);
            font-weight: var(--font-weight-2);
            font-size: var(--font-size-5);
            cursor: pointer;
        }

        div {
            display: flex;
            

            span {
                border-radius: 4px;
                padding: 0.25rem;
                background-color: var(--color-primary);
                color: var(--white);
                cursor: pointer;
            }
    
            p {
                padding: 0.5rem;
            }
        }
    }

    button:hover {
        background-color: var(--color-primary-50);
        transition: 0.75s;
        border: none;
    }
`