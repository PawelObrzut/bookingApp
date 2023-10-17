import React from 'react'
import classes from './LoginForm.module.scss';

const LoginForm = () => {
  return (
    <div className='container'>
      <h3 className={classes.login__header}>LogIn to your account</h3>

      <form className={classes.loginForm}>
        <label htmlFor="userName">User name:</label>
        <input type="text" id="userName" name="userName" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <input className={`${classes.loginForm__submit} theme_btn`} type="submit" value="LogIn" />
      </form>

    </div>
  )
}

export default LoginForm