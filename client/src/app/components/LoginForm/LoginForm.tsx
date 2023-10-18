import React, { useState } from 'react'
import classes from './LoginForm.module.scss';
import { loginUser } from '../../services/authServices';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { useDispatch } from 'react-redux';
import { Icredentials } from '../../types/types';

const LoginForm = () => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();

  const [credentials, setCredentials] = useState<Icredentials>({
    username: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(loginUser(credentials))

    setCredentials({
      username: '',
      password: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={`${classes.login} container`}>
      <h3 className={classes.login__header}>LogIn to your account</h3>

      <form className={classes.login__form} onSubmit={handleSubmit}>
        <label htmlFor="userName">User name:</label>
        <input type="text" id="userName" name="username" value={credentials.username} onChange={handleChange} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} />
        <input className={`${classes.login__form__submit} theme_btn`} type="submit" value="LogIn" />
      </form>

      <section className={classes.login__mockData}>
        <h4>
          Use one of these mockUsers to log into the cinema service:
        </h4>
        <div className={classes.login__mockData__user}>
          <p>username: John</p>
          <p>password: notAstrongPassword123</p>
          <button onClick={() => {
            setCredentials({
              username: 'John',
              password: 'notAstrongPassword123'
            })
          }}>Set John's credentials</button>
        </div>

        <div className={classes.login__mockData__user}>
          <p>username: Maria</p>
          <p>password: easyPassword?0</p>
          <button onClick={() => {
            setCredentials({
              username: 'Maria',
              password: 'easyPassword?0'
            })
          }}>Set Maria's credentials</button>
        </div>
      </section>
    </div>
  )
}

export default LoginForm;
