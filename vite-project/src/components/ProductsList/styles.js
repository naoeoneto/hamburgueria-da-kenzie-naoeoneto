import styled from "styled-components";

export const List = styled.ul`
    height: auto;
    width: auto;
    display: flex;
    padding: 1rem 0 1.25rem;
    gap: 1.25rem;
    overflow-x: scroll;

    &::-webkit-scrollbar{
        background-color: var(--gray-0);
        width: 0.5rem;
        height: 0.5rem;
    }

    &::-webkit-scrollbar-thumb{
        background-color: var(--color-primary-50);
        border-radius: 5px;
    }

    @media (min-width: 769px) {
        flex-wrap: wrap;
        width: 70%;
    }
`