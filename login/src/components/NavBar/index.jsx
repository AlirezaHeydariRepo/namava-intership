import React from 'react'
import namavaLogo from '../../assets/images/namavaLogo.svg'
import './style.css'

export default function NavBar () {
  return (
    <a className='navBar' href='https://www.namava.ir/auth/register-email'>
      <img src={namavaLogo} alt="namavaLogo" className="namavaLogo" />
      <div className="signInBtn">
        ثبت نام
      </div>
    </a>
  )
}
