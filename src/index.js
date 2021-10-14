import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './context/UserContext';
import { GlobalStyle } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider >
      <GlobalStyle />
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
