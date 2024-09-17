import React from 'react'
import emptyStateImage from '../../../../assets/images/empty-state.png'
import './style.css'

export default function EmptyState () {
  return (
    <div className='empty-state'>
      <img className='empty-image' src={emptyStateImage} alt="empty-state" />
      <span className='empty-text'>عنوان فیلم، سریال یا بازیگر مورد نظر خود را جستجو کنید و یا از طریق فیلتر‌های موجود، فیلم و سریال مورد علاقه خود را پیدا کنید. </span>
    </div>
  )
}
