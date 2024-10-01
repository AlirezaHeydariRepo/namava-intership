import React, {useState} from 'react'
import './style.css'
import eye from '../../assets/images/eye.svg'
import eyeSlash from '../../assets/images/eyeSlash.svg'

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')  
  const handlePassword = (value) => {
    setPassword(value)
  }
  const handleEmail = (value) => {
    setEmail(value)
  } 


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='logIn'>
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
            />
          }
        </div>
      </div>
      <div className={`logInBtn ${(email && password) ? 'active' : ''}`}>
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
