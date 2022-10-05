import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const name = useRef()
  const email = useRef()
  const pass = useRef()
  const conPass = useRef()
  const Country = useRef()
  const dob = useRef()
  const gender = useRef()
  const register = useRef()


  const navigate = useNavigate()
  const HandleSubmit = (e)=>{
    e.preventDefault()
    // console.log('submitted')
    const sendData = {
username : name.current.value,
useremail : email.current.value,
password : pass.current.velue,
country : Country.current.value,
dob : dob.current.value,
gender : gender.current.value,
usertype : register.current.value
    }
    console.log(sendData)
    navigate('/login')
  }
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input type='text' ref={name} placeholder='Username'/><br/>
        <input type='text' ref={email} placeholder='Email'/><br/>
        <input type='text' ref={ pass} placeholder='Password'/><br/>
        <input type='text'  ref={ conPass} placeholder='Confirm Password'/><br/>
        <input type='text' ref={ Country} placeholder='Country'/><br/>
        <input type='text' ref={ dob} placeholder='DOB'/><br/>
        <label for="gender">Gender :</label>
        <select name="gender" ref={gender} id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select><br />
        <label name="type">Register as :</label>
        <select name='type' id='type' ref={ register}>
          <option value='buyer'>buyer</option>
          <option value='bidder'>bidder</option>
          <option value='both'>Both</option>
        </select><br />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Register