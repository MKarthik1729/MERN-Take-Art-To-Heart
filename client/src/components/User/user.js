import React, { useContext } from 'react'
import { UserContext } from '../../context/Context'
import './user.css'
import UserNavbar from './userNavbar'
function User() {
  const {name} = useContext(UserContext)
  return (<>
  <UserNavbar />
    <h1 className='greet'>Hello {name}</h1>
  </>
  )
}

export default User