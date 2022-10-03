import styled from "styled-components";

export const ProductInfo = styled.li`
    width: 300px;
    border: 1px solid var(--gray-20);
    border-radius: 8px;
    
    figure {
        height: 150px;
        width: 300px;
        background-color: var(--gray-0);
        border-radius: 8px 8px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            height: 100%;
            object-fit: cover;
        }
    }

    div {
        padding: 1.75rem;
        align-items: flex-start;

        h2 {
            font-size: var(--font-size-3);
            font-weight: var(--font-weight-1);
            line-height: 24px;
            color: var(--gray-100);
            margin-bottom: 0.5rem;
        }

        p {
            font-size: var(--font-size-6);
            font-weight: var(--font-weight-3);
            color: var(--gray-50);
            margin-bottom: 0.5rem;
        }

        h4 {
            font-size: var(--font-size-5);
            font-weight: var(--font-weight-2);
            color: var(--color-primary);
        }

    }

    button {
        margin-left: 1.25rem;
        margin-bottom: 1.5rem;
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-2);
        background-color: var(--color-primary);
        color: var(--white);
        border: none;
    }

    button:hover {
        background-color: var(--color-primary-50);
        transition: 0.75s;
        border: none;
    }

    @media (min-width: 769px) {
        max-width: 260px;

        figure {
            width: auto;
        }
    }
`