/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import './style.css'
import eye from '../../assets/images/eye.svg'
import eyeSlash from '../../assets/images/eyeSlash.svg'
import axios from 'axios'
import ToastContainer from '../ToastContainer'
import { Player } from '@lottiefiles/react-lottie-player'
import loading from '../../lottie/loading.json'

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('') 
  const [toast, setToast] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  const request = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValid = emailPattern.test(email)

    if (!isValid) {
      showToast()
    } else {
      loginRequest()
    }
  }

  const showToast = () => {
    setToast(true)
    setTimeout(() => {
      setToast(false)
    }, 4000)
  }
  function setCookie(key) {
    let expires = new Date()
    expires.setTime(expires.getTime())
    expires.toUTCString()
    const value = expires
    document.cookie = `${key}=${value}; max-age=100; path=/`
  }
  
  const loginRequest = () => {
    setIsLoading(true)
    axios.post(
      'https://www.namava.ir/api/v1.0/accounts/login',
      {
        UserName: email,
        Password: password
      }).then(Response => {
      setIsLoading(false)
      setCookie(email, 10)
      window.location.href = 'https://www.namava.ir/home'
    })
  }


  return (
    <div className='logIn'>
      {(<ToastContainer toast={toast}/>)}
      <span className="title">ورود از طریق ایمیل</span>
      <span className="description">لطفا ایمیل و رمز عبور خود را وارد کنید.</span>
      <div className="email">
        <span className="emailTitle">ایمیل</span>
        <input 
          className='emailInput' 
          type="email" 
          placeholder='ایمیل خود را وارد کنید.'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="password">
        <span className="passwordTitle">رمز عبور</span>
        <div className="passwordContent">
          <input className='passwordInput' 
            type={showPassword ? 'text' : 'password'} 
            placeholder='رمز خود را وارد کنید.'
            onChange={(e) => setPassword(e.target.value)}
          />
          {password && 
            <img
              className='passwordIcon'
              src={showPassword ? eyeSlash : eye}
              onClick={() => setShowPassword(prev => !prev)}
              alt='passwordIcon'
            />
          }
        </div>
      </div>
      <div className={`logInBtn ${(email && password) ? 'active' : ''}`} onClick={request}>
        {isLoading ? <Player className='lottie' autoplay loop src={loading}/> : <span className='logInBtnText'>ورود</span>}
      </div>
      <a className="forgotPassword" href='https://www.namava.ir/auth/recover-email'>
      رمز عبور خود را فراموش کرده‌ام.
      </a>
      <a className="logInWithPhone" href='https://www.namava.ir/auth/login-phone'>
      ورود از طریق شماره تلفن همراه
      </a>
    </div>
  )
}
