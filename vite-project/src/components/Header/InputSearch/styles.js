import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0.625rem;
    border: 2px solid var(--gray-20);
    border-radius: 8px;
    background-color: var(--white);

    &:hover {
        border: 2px solid var(--gray-100); 
    }

    input {
        border: none;
        background-color: transparent;
    }

    &:focus {
        border: none;
    }

    &::placeholder {
        font-size: var(--font-size-4);
        font-weight: var(--font-weight-3);
        color: var(--gray-20);
        margin-left: 5px;
    }

    span {
        padding: 0.72rem 1.25rem;
        background-color: var(--color-primary);
        color: var(--white);
        font-size: var(--font-size-5);
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }

    span:hover {
        background-color: var(--color-primary-50);
        transition: 0.75s;
        border: none;
    }

    @media (min-width: 426px) {
        max-width: 365px;
    }
`