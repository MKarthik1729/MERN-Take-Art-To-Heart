import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const HandleSubmit = (e) =>{
        e.preventDefault()
        console.log('data done working fine')
        navigate('/user')
    }

  return (
    <div>
        <form onSubmit={HandleSubmit}>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Login