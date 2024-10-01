import React, {useState} from 'react'
import './style.css'
import eye from '../../assets/images/eye.svg'
import eyeSlash from '../../assets/images/eyeSlash.svg'
import axios from 'axios'
import ToastContainer from '../ToastContainer'

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('') 
  const [isValid, setIsValid] = useState(false)
  const [toast, setToast] = useState(false)

  const handlePassword = (value) => {
    setPassword(value)
  }
  const handleEmail = (value) => {
    setEmail(value)
  }

  const request = () => {
    validateEmail()
    if (!isValid) {
      setToast(true)
      showToast()
    } else {
      loginRequest()
    }
  }

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const currValidation = emailPattern.test(email)
    setIsValid(currValidation)
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const showToast = () => {
    setTimeout(() => {
      setToast(false)
    }, 4000)
  }
  const loginRequest = () => {
    axios.post(
      'https://www.namava.ir/api/v1.0/accounts/login',
      {
        UserName: email,
        Password: password
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
          onChange={(e) => handleEmail(e.target.value)}
        />
      </div>
      <div className="password">
        <span className="passwordTitle">رمز عبور</span>
        <div className="passwordContent">
          <input className='passwordInput' 
            type={showPassword ? 'text' : 'password'} 
            placeholder='رمز خود را وارد کنید.'
            onChange={(e) => handlePassword(e.target.value)}
          />
          {password && 
            <img
              className='passwordIcon'
              src={showPassword ? eyeSlash : eye}
              onClick={togglePasswordVisibility}
              alt='passwordIcon'
            />
          }
        </div>
      </div>
      <div className={`logInBtn ${(email && password) ? 'active' : ''}`} onClick={request}>
        <span className="logInBtnText">
        ورود
        </span>
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
