import styled from "styled-components";

export const ProductInfo = styled.li`
    width: 300px;
    border: 1px solid #000;
    border-radius: 8px;
    
    figure {
        height: 150px;
        width: 300px;

        img {
            height: 100%;
            object-fit: cover;
        }
    }

    div {
        padding: 1.75rem;
    }
`