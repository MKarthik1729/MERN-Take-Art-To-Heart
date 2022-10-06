import React from 'react'
import { Link } from 'react-router-dom'
import { Stylehead, Totdiv } from '../styles/home'
// import NavSend from './Nav'

function Home() {
  return (
    <>
    {/* <NavSend /> */}
        <Stylehead>Take Art To Heart</Stylehead>
      <Totdiv>
        <Link to='/login'>Login</Link><br />
        <Link to='/register'>Register/SignUp</Link>
    </Totdiv>
    </>
  )
}

export default Home