import React, { FC } from 'react';

import style from './style.scss';

const Login: FC = () => (
  <form
    className={style['signin-form']}
  >
    <input
      className={style['signin-form__username-input']}
      type="text"
      name="username"
      placeholder="Username"
    />
    <input
      className={style['signin-form__password-input']}
      type="password"
      name="password"
      placeholder="Password"
    />
    <button
      type="submit"
    >
      LOGIN
    </button>
  </form>
);

export default Login;
