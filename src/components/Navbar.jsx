import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav'>
          <div className='navbar'>
                <div className='logo'>
                        <h1>DigitalDice</h1>
                </div>

                <div className='nav-links'>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Play</a></li>
                    </ul>
                </div>
            </div>  
    </div>
  )
}

export default Navbar