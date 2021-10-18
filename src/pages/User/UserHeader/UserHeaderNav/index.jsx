import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../../../context/UserContext';
import {ReactComponent as MinhasFotos} from '../../../../assets/feed.svg'
import {ReactComponent as Adicionar} from '../../../../assets/adicionar.svg'
import {ReactComponent as Estatisticas} from '../../../../assets/estatisticas.svg'
import {ReactComponent as Sair} from '../../../../assets/sair.svg'
import { Nav } from './styles';

const UserHeaderNav = () => {

  const { userLogout } = useContext(UserContext);

  return (
    <Nav>
      <NavLink to='/conta'><MinhasFotos />Minhas Fotos</NavLink>
      <NavLink to='/conta/estatisticas'><Estatisticas />Estatísticas</NavLink>
      <NavLink to='/conta/postar'><Adicionar />Adicionar Foto</NavLink>
      <button onClick={userLogout}><Sair />Sair</button>
    </Nav>
  )
}

export default UserHeaderNav
