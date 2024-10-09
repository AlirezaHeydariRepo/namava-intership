import React, { useState } from 'react'
import './style.css'
import namavaLogo from '../../assets/images/namavaLogo.svg'
import sibApp from '../../assets/images/sibApp.svg'
import bazar from '../../assets/images/bazar.svg'
import googlePlay from '../../assets/images/googlePlay.svg'
import eNamad from '../../assets/images/eNamad.svg'
import samandehi from '../../assets/images/samandehi.svg'
import instagram from '../../assets/images/instagram.svg'
import telegram from '../../assets/images/telegram.svg'
import twitter from '../../assets/images/twitter.svg'
import moreLinksImg from '../../assets/images/chevron-Down.png'

export default function Footer() {
  // eslint-disable-next-line no-unused-vars
  const [resize, setResize] = useState(false)
  const [currClass, setCurrClass] = useState('inactive')
  const links = ['اپلیکیشن‌ها', 'فرصت‌های شغلی ', 'تبلیغات در نماوا', 'خرید اشتراک', 'کارت هدیه', 'سوالات متداول', 'تماس با ما', 'درباره نماوا', 'شرایط مصرف اینترنت', 'ارسال فیلمنامه']

  const widthSize = (value) => {
    let linksCount = 0
    if (value < 500) {
      value = '360'
      linksCount = 2
    } else if (value < 800) {
      value = '500'
      linksCount = 3
    } else if (value < 1280) {
      value = '800'
      linksCount = 5
    } else if (value < 1920) {
      linksCount = 7
      value = '1280'
    } else {
      linksCount = 11
      value = '1920'
    }
    return [value , linksCount]
  } 
  let currWidth = window.innerWidth
  currWidth = widthSize(currWidth)
  // console.log(currWidth)
  window.addEventListener('resize', () => {
    setResize(true)
    const newWidth = widthSize(window.innerWidth)
    if (newWidth[0] !== currWidth[0]) {
      currWidth[0] = newWidth[0]
      setResize(false)
    }
    
  })
  const handleClick = (value) => {
    // console.log(value)
    
    if (value === 'moreLinks inactive') {
      setCurrClass('active')
    } else if (value === 'moreLinks active') {
      setCurrClass('inactive')

    }
  }
  
  const showedLinks = []
  for (let i = 0; i < currWidth[1]; i++) {
    showedLinks.push(<span key={i} className='link'>{links[i]}</span>)
  }
  const hiddenLinks = []
  for (let i = currWidth[1]; i < links.length; i++) {
    hiddenLinks.push(<span key={i} className='link'>{links[i]}</span>)
  }
  
  return (
    <footer>
      <div className="links">
        {
          showedLinks.map((value) => value
          )
        }
        <div className={`moreLinks ${currClass}`} onClick={(e) => handleClick(e.currentTarget.className)}>
          <sapn className="moreLinksText">سایر لینک‌ها</sapn>
          <img src={moreLinksImg} alt="moreLinksImg" className="moreLinksImg" />
          <div className={`accordion ${currClass}`}>
            {hiddenLinks.map(value => value)}
          </div>
        </div>
      </div>
      <div className="footerContent">
        <div className="application">
          <div className="namavaBox">
            <div className="namavaApp">
              <img className='namavaLogo' src={namavaLogo} alt="namavaLogo" />
            </div>
            <span className="namavaAppText">دانلود اپلیکیشن</span>
          </div>
          <div className="applicationsStores">
            <div className="bazar">
              <img src={bazar} alt="bazar" />
              <div className="appText">
                <span className="appTextTitle">دریافت از</span>
                <span>بازار</span>
              </div>
            </div>
            <div className="sibApp">
              <img src={sibApp} alt="sibApp" />
              <div className="appText">
                <span className="appTextTitle">دریافت از</span>
                <span>بازار</span>
              </div>
            </div>
            <div className="googlePlay">
              <img src={googlePlay} alt="googlePlay" />
              <div className="appText">
                <span className="appTextTitle">دریافت از</span>
                <span>بازار</span>
              </div>
            </div>
            <span className="moreApp">بیشتر</span>
          </div>
        </div>
        <div className="about">
          <span className="aboutTitle">درباره نماوا</span>
          <div className="aboutContent">
            <div className="aboutText">سرزمین شاتل در سایت نماوا امکان پخش آنلاین فیلم‌ها و سریال‌های محبوبتان را در اختیار شما کاربران گرامی قرار می‌دهد. مشاهده پیش‌نمایش فیلم و سریال‌ها، جستجوی سریع مجموعه انتخابی، دانلود درون‌برنامه‌ای، حساب چند کاربره، تنظیمات کودک، پخش زنده رویدادهای ورزشی و فرهنگی و آرشیوی کامل از پرطرفدارترین فیلم‌ها و سریال‌ها از جمله قابلیت‌های نماوا، به‌روزترین سایت تماشای فیلم و سریال است. نماوا این امکان را برای کاربران خود فراهم کرده است تا در سریع‌ترین زمان ممکن و تنها با چند کلیک، سریال‌ها و فیلم‌های مورد علاقه خود را به صورت آنلاین و آفلاین مشاهده کنند.</div>
            <div className="aboutLogos">
              <img className='eNamad' src={eNamad} alt="eNamad" />
              <img className='samandehi' src={samandehi} alt="samandehi" />
            </div>
          </div>
        </div>
        <div className="conectUs">
          <div className="conectUsLogo">
            <img className='telegram' src={telegram} alt="telegram" />
            <img className='instagram' src={instagram} alt="instagram" />
            <img className='twitter' src={twitter} alt="twitter" />
          </div>
          <div className="conectUsText">
          خدمات ارائه شده در نماوا، دارای مجوز‌های لازم از مراجع مربوطه است و هر گونه بهره‌برداری و سوء‌استفاده از محتوای نماوا، پیگرد قانونی دارد.
          </div>
        </div>
      </div>
    </footer>
  )
}
