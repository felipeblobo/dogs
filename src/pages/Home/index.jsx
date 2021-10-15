import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Container } from '../../styles/global'

const Home = () => {
  const { loading } = useContext(UserContext);
  
  if(loading) return <h1>Loading!!</h1>

  return (
    <Container>
      Home
    </Container>
  )
}

export default Home
