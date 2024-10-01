import React from 'react'
import NavBar from '../../components/NavBar'
import './style.css'
import LogIn from '../../components/LogIn'

export default function LogInPage() {
  return (
    <div className='loginPage'>
      <NavBar/>
      <LogIn />
    </div>
  )
}
