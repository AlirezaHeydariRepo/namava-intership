import React from 'react'
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


export default function Footer() {
  return (
    <footer>
      <div className="links"></div>
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
