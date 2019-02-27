import React from 'react'
import { Link } from 'react-router-dom'

import SETTINGS from './SETTINGS'
import logo from './logo.png'

export default ({handleQuizReset}) => {
  return (
    <header className='Header'>
      <div className='ui container'>
        <nav className='grid'>
          <Link to='/' className='ui logo image' onClick={() => handleQuizReset()} >
            <img src={logo} alt='logo' />
          </Link>
          <div className='app title'>
            {SETTINGS.name}
          </div>
        </nav>
      </div>
    </header>
  )
}
