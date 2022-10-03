import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    padding: 0 1rem;
    margin: 0 auto;

    .homeSections {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    @media (min-width: 769px) {
        .homeSections {
           flex-direction: row;
           justify-content: space-between;
       }
    }
`