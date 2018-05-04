import React from 'react'
import { Link } from 'react-router-dom'

import app from '../setting/app'

export default ({onReset}) => (
<header className="App-header">
  <div className='ui container'>
    <nav className='App-menu ui text menu' >
      <Link to='/' className='icon logo image item' onClick={() => onReset()} >
        <img src='./logo.png' alt='logo' />
        {app.name}
      </Link>
      <div className='right menu'>
        <div className='icon item'>
          <i className='icon sidebar' />
        </div>
      </div>
    </nav>
  </div>
</header>

)