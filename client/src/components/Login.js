import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/Context'

function Login() {
    const navigate = useNavigate()
    const {name,setName} = useContext(UserContext)
    const HandleSubmit = (e) =>{
        e.preventDefault()
        console.log(name)
        setName('karthik')
        console.log('data done working fine')
        navigate('/user')
    }

  return (
    <div>
        <form onSubmit={HandleSubmit}>
            <input type='email' placeholder='Email' /><br/>
            <input type='password' placeholder='Password' /><br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Login