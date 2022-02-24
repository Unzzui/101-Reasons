import React from 'react'
import './Reasons.css'

const Reasons = ({msg}) => {
  return (
      <div className='r'>
            <div className='r-browser'>
            <div className='r-circle'></div>
            <div className='r-circle'></div>
            <div className='r-circle'></div>

            </div>   
        <p className='r-msg'>{msg}</p>
    </div>
  )
}

export default Reasons