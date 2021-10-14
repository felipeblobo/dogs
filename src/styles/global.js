import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #333;
    --anotherGold: #764701;
    --smoothBackground: #eee;
    --golden: #ffbb11;
    --type-first: 'Inter', sans-serif;
    --type-second: 'Spectral', serif;

    
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(---type-first);
    color: var(---black);
    padding-top: 4rem;
  }

  ul, li {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
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
