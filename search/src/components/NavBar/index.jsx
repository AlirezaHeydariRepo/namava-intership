import React from 'react'
import './style.css'
import Logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/avatar.png'
import email from '../../assets/images/email.png'
import search from '../../assets/images/search.png'

export default function NavBar () {
  const navItems = [
    { title: 'خانه', url: 'https://www.namava.ir/home' },
    { title: 'فیلم‌ ها', url: 'https://www.namava.ir/movie' },
    { title: 'سریال‌ ها', url: 'https://www.namava.ir/series' },
    { title: 'دسته ‌‌بندی', url: 'https://www.namava.ir/category' },
    { title: 'تازه ‌ها', url: 'https://www.namava.ir/latest' },
    { title: 'کودکان', url: 'https://www.namava.ir/kids-profile-list' },
    { title: 'پردیس نماوا', url: 'https://www.namava.ir/collection-1327-pardis' },
    { title: 'نماوا مگ', url: 'https://www.namava.ir/mag/' }
  ]

  return (
    <nav>
      <div className="titles">
        <img className='namava-logo' src={Logo} alt="namava-logo" />
        {navItems.map((item, index) => {
          return (
            <a key={index} href={item.url} className='title-url'>
              <span className='title-text'>{item.title}</span>
            </a>
          )
        })}
      </div>
      <div className="icons">
        <img src={search} alt="search-icon" />
        <img src={email} alt="email-icon" />
        <img src={avatar} alt="avatar-icon" />
      </div>
    </nav>
  )
}
