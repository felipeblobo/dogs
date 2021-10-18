import React from 'react'
import { UserHeaderContainer, UserHeaderTitle } from './styles'
import UserHeaderNav from './UserHeaderNav'

const UserHeader = () => {
  return (
    <UserHeaderContainer>
      <UserHeaderTitle>Título</UserHeaderTitle>
      <UserHeaderNav />
    </UserHeaderContainer>
  )
}

export default UserHeader
