import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;

    --gray-100: #333333;
    --gray-50: #828282;
    --gray-20: #E0E0E0;
    --gray-0: #F5F5F5;
    --white: #FFFFFF;

    --negative: #E60000;
    --warning: #FFCD07;
    --success: #168821;
    --information: #155BCB;

    --font-weight-1: 700;
    --font-weight-2: 600;
    --font-weight-3: 400;

    --font-size-1: 26px;
    --font-size-2: 22px;
    --font-size-3: 18px;
    --font-size-4: 16px;
    --font-size-5: 14px;
    --font-size-6: 12px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
    width: 100vw;
  }
  
  body, html {
    background: #fff;
    font-family: 'Inter', sans-serif;
    overflow-y: auto;
    overflow-x: hidden;
  }

  &::-webkit-scrollbar{
        background-color: var(--gray-0);
        width: 0.5rem;
        height: 0.5rem;
  }

  &::-webkit-scrollbar-thumb{
      background-color: var(--color-primary-50);
      border-radius: 5px;
  }

  li {
    list-style: none;
    padding-inline-start: 0;
  }

  button {
    cursor: pointer;
  }
`