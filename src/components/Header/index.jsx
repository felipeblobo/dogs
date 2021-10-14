import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import dogs from '../../assets/dogs.svg';
import { UserContext } from '../../context/UserContext';
import { HeaderStyled, LoginStyled, NavStyled } from './styles';

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <HeaderStyled>
      <NavStyled>
        <Link to="/" aria-label="Dogs - Home">
          <img src={dogs} alt="logo da rede social" />
        </Link>
        {data ? (
          <Link to="/conta">
            <LoginStyled>{data.nome}</LoginStyled>
          </Link>
        ) : (
          <Link to="/login">
            <LoginStyled>Login / Criar</LoginStyled>
          </Link>
        )}
      </NavStyled>
    </HeaderStyled>
  );
};

export default Header;
