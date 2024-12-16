import React from 'react'
import EmptyStateIcon from '../../icons/EmptyStateIcon'
import './style.css'

export default function EmptyState () {
  return (
    <div className='emptyStateContainer'>
      <div className="Icon">
        <EmptyStateIcon />
      </div>
      <div className="text">
        لیست شما خالی است.
      </div>
    </div>
  )
}