import styled from "styled-components";

export const Total = styled.div`
    border-top: 2px solid var(--gray-50);
    padding: 1.25rem 0.75rem;

    div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.25rem;

        .totalName {
            font-weight: var(--font-weight-2);
            font-size: var(--font-size-5);
            color: var(--gray-100);
            line-height: 24px;
        }

        .totalMoney {
            font-weight: var(--font-weight-2);
            font-size: var(--font-size-5);
            color: var(--gray-50);
            line-height: 24px;
        }

    }
    
    button {
        padding: 20.5px;
        width: 100%;
        border: none;
        background-color: var(--gray-20);
        color: var(--gray-50);
        font-weight: var(--font-weight-2);
        font-size: var(--font-size-4);
    }
`