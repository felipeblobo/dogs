import React from 'react';
import { Link } from 'react-router-dom';
import dogs from '../../assets/dogs.svg';
import { HeaderStyled, LoginStyled, NavStyled } from './styles';

const Header = () => {
  return (
    <HeaderStyled>
      <NavStyled>
        <Link to="/" aria-label="Dogs - Home">
          <img src={dogs} alt="logo da rede social" />
        </Link>
        <Link to="/login">
          <LoginStyled>Login / Criar</LoginStyled>
        </Link>
      </NavStyled>
    </HeaderStyled>
  );
};

export default Header;
