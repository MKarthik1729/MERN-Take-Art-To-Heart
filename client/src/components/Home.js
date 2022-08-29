import React from 'react'
import { Link } from 'react-router-dom'
import { Stylehead } from '../styles/home'

function Home() {
  return (
    <div>
        <Stylehead>Take Art To Heart</Stylehead>
        <Link to='/login'>Login</Link><br />
        <Link to='/register'>Register/SignUp</Link>
    </div>
  )
}

export default Home