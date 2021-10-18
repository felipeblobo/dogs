import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { animeLeft } from '../../../styles/global';

export const LoginFormSection = styled.section`
  opacity: 0;
  transform: translateX(-20px);
  animation: ${animeLeft} 0.3s forwards;
`;

export const Form = styled.form`
  margin-bottom: 2rem;
`;

export const LostLink = styled(Link)`
  display: inline-block;
  color: #666;
  padding: .5rem 0;
  line-height: 1;

  &::after {
    content: '';
    height: 2px;
    width: 100%;
    background: currentColor;
    display: block;
  }
`;

export const RegisterSection = styled.div`
  margin-top: 4rem;

  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  h2 {
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2rem;

    &::after {
      content: '';
      display: block;
      background: #ddd;
      height: .5rem;
      width: 3rem;
      border-radius: .2rem;
    }
  }
`;

export const LoginTitle = styled.h1`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--golden);
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -555;
  }
`;