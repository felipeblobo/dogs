import React, { createContext, useEffect, useState } from 'react';
import api from '../api';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function autoLogin() {
      try {
        const response = await api({
          method: 'POST',
          url: '/jwt-auth/v1/token/validate',
        });
        setData(response.data);
        setLogin(true);
      } catch (error) {
        setError(error);
      }
    }
    autoLogin();
    getUser();
  },[])

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
      setLoading(true);
      const response = await api({
        method: 'POST',
        url: '/jwt-auth/v1/token',
        data: {
          username: username.value,
          password: password.value,
        },
      });
      const { token } = response.data;
      window.localStorage.setItem('dogToken', token);
      getUser();
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider value={{ userLogin, data, loading, setLoading, error }}>
      {children}
    </UserContext.Provider>
  );
};
