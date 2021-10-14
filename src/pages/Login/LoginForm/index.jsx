import React, { useContext } from 'react';
import useForm from '../../../hooks/useForm';
import Button from '../components/Button';
import InputBlock from '../components/Input';
import { UserContext } from '../../../context/UserContext';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, loading } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username, password)
    }
    username.setValue('');
    password.setValue('');
  }

  if(loading) return <h1>Loading!!</h1>

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <InputBlock label="Usuário" type="text" name="username" {...username}/>
        <InputBlock label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default LoginForm;
