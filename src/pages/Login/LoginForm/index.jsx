import React, { useContext } from 'react';
import useForm from '../../../hooks/useForm';
import Button from '../components/Button';
import InputBlock from '../components/Input';
import { UserContext } from '../../../context/UserContext';
import {  Form, LoginFormSection, LoginTitle, LostLink, RegisterSection } from './styles';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, loading, error } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username, password);
    }
  }

  return (
    <LoginFormSection>
      <LoginTitle>Login</LoginTitle>
      <Form onSubmit={handleSubmit}>
        <InputBlock label="Usuário" type="text" name="username" {...username} />
        <InputBlock
          label="Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? <Button disabled>Entrar</Button> : <Button>Entrar</Button>}
        {error && <p>{error}</p>}
      </Form>
      <LostLink to='/login/perdeu'>Perdeu a Senha?</LostLink>
      <RegisterSection>
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Button as={Link} to='/login/criar'>Cadastro</Button>
      </RegisterSection>
    </LoginFormSection>
  );
};

export default LoginForm;
