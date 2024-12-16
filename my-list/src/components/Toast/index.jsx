import React from 'react'
import PropTypes from 'prop-types'
import Warning from '../../../icons/Warning'
import './style.css'

Toast.propTypes = {
  showToast: PropTypes.bool,
}
export default function Toast (props) {
  const { showToast } = props

  return (
    <div className='toastContainer'>
      <div className={`toast ${showToast ? 'active' : 'inactive'}`}>
        <div className="toastIcon">
          <Warning />
        </div>
        <span className='toastText'>حداکثر می توانید ۳ آیتم را به صورت همزمان حذف کنید.</span>
      </div>
    </div>
  )
}