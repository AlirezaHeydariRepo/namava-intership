import React from 'react'
import './style.css'
import EmptyStateIcon from '../../../icons/EmptyStateIcon'

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
