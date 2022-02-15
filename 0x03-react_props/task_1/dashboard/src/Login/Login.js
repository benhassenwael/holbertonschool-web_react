import React, { Fragment } from 'react'

export default function Login() {
  return (
    <Fragment>
        <p>
          Login to access the full dashboard
        </p>
        <label htmlFor='email'>Email</label>
        <input type="text" id="email"/>
        <label htmlFor='password'>Password</label>
        <input type="password" id="password"/>
        <button >OK</button>
    </Fragment>
  )
}
