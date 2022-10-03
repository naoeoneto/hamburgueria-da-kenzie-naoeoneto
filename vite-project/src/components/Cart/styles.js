import styled from "styled-components";

export const CartList = styled.section`
    height: auto;
    width: auto;
    margin-top: 1rem;
    /* display: flex; */

    h2 {
        padding: 1.25rem;
        align-items: flex-start;
        background-color: var(--color-primary);
        color: var(--white);
        border-radius: 4px 4px 0 0;
        line-height: 24px;
    }

    .withProducts {
        background-color: var(--gray-0);
        padding: 1.25rem 0;
        width: auto;
        align-items: center;
    }

    .noProducts {
        background-color: var(--gray-0);
        height: 158px;
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h3 {
            font-size: var(--font-size-5);
            font-weight: var(--font-weight-1);
            color: var(--gray-100);
            line-height: 24px;
        }

        span {
            font-size: var(--font-size-6);
            font-weight: var(--font-weight-3);
            color: var(--gray-50);
            line-height: 24px;
        }
    }

    @media (min-width: 769px) {
        width: 380px;
    }
`