import React, { createContext, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userLogout = useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('dogToken');
    navigate('/login');
  }, [navigate]);

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('dogToken');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const response = await api({
            method: 'POST',
            url: '/jwt-auth/v1/token/validate',
          });
          if (!response.status === 200) {
            throw new Error('Token inválido!');
          }
          await getUser();
          setLogin(true);
        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  async function getUser() {
    try {
      const response = await api({
        method: 'GET',
        url: '/api/user',
      });
      setData(response.data);
      setLogin(true);
    } catch (error) {
      setError(error);
    }
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const response = await api({
        method: 'POST',
        url: '/jwt-auth/v1/token',
        data: {
          username: username.value,
          password: password.value,
        },
      });
      if (!response) {
        throw new Error('Login ou senha inválidos!');
      }
      const { token } = response.data;
      window.localStorage.setItem('dogToken', token);
      await getUser();
      navigate('/conta');
    } catch (error) {
      setError('Login ou senha inválidos!');
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{ userLogin, data, login, loading, setLoading, error, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
