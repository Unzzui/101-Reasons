import React, { useContext } from 'react'
import './Toggle.css'
import { ThemeContext } from '../../context';
import Sun from '../../images/sun.png'
import Moon from '../../images/moon.png'


const Toggle = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleClick = () => {
        theme.dispatch ({type : "TOGGLE"})
    }
  return (
    
    <div className='t' style={{backgroundColor: darkMode && '#333'}}>
        <img src={Sun} alt='' className='t-icon' />
        <img src={Moon} alt='' className='t-icon' />
        <div className='t-button' onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25, transition: '0.4s ease-in-out'}} ></div>
    </div>
  )
}

export default Toggle