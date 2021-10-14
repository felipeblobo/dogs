import React, { useState } from 'react';

const LoginCreate = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChane={handleChange}
        />
        <button>Entrar</button>
      </form>
    </section>
  );
};

export default LoginCreate;
