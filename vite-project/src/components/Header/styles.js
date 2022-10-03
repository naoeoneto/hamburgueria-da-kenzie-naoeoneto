import styled from "styled-components";

export const MyHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    justify-content: baseline;
    align-items: center;
    gap: 13.9px;
    background-color: var(--gray-0);

    @media (min-width: 426px) {
        width: auto;
        flex-direction: row;
        justify-content: space-between;
    }
`