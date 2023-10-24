import React from 'react'
import Templates from '../Comps/Templates'

const Login = ({ setLogged }) => {
  return (
    <div>
      <Templates

        title="Welcome Back"
        desc1="Hey There"
        desc2="Hope You FINE!"
        fromtype="Login"
        setLogged={setLogged}
      />
    </div>
  )
}

export default Login