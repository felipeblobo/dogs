import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #333;
    --type-first: 'Inter', sans-serif;
    --type-second: 'Spectral', serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(---type-first);
    color: var(---black);
  }

  ul, li {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }
  
  button, input {
    display: block;
    font-size: 1rem;
    font-family: var(--type-first);
    color: var(--black);
  }
`;

export const Container = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
`;
