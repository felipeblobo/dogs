import React, { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import useForm from '../../../hooks/useForm';
import Button from '../components/Button';
import InputBlock from '../components/Input';
import { CreateFormSection, CreateFormTitle } from './styles';
import useFetch from '../../../hooks/useFetch';
import { Error } from '../components/Input/styles';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();
  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  const options = {
    method: 'POST',
    url: '/api/user',
    data: {
      username: username.value,
      email: email.value,
      password: password.value,
    },
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const { response } = await request(options);
    if (response.status === 200) {
      await userLogin(username, password);
    }
  }

  return (
    <section>
      <h1>
        <CreateFormSection>
          <CreateFormTitle>Cadastre-se</CreateFormTitle>
          <form onSubmit={handleSubmit}>
            <InputBlock
              label="Usuário"
              type="text"
              name="username"
              {...username}
            />
            <InputBlock label="Email" type="email" name="email" {...email} />
            <InputBlock
              label="Senha"
              type="password"
              name="password"
              {...password}
            />
            {loading ? (
              <Button disabled>Cadastrando...</Button>
            ) : (
              <Button>Cadastrar</Button>
            )}
          </form>
          {error && <Error>{error}</Error>}
        </CreateFormSection>
      </h1>
    </section>
  );
};

export default LoginCreate;
