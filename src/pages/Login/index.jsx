import React, { useContext } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../context/UserContext';
import { Forms, MainLoginSection } from './styles';

const Login = () => {
  
  const { login } = useContext(UserContext);

  if (login) return <Navigate to="/conta" />;

  return (
    <MainLoginSection>
      <Forms>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </Forms>
    </MainLoginSection>
  );
};

export default Login;
