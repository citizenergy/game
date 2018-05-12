import React from 'react'

import org from '../setting/org'
import logo from '../image/logo.png'

export default (
<footer className='App-footer' >
  <div className='ui container'>
    <div className='App-menu ui text menu'>
      <a href='/' className='icon logo image item'>
        <img src={logo} alt='logo' />
        {org.name}
      </a>
      <div className='right menu'>
        <a className='icon item' href='https://github.com/citizenergy/game' target='_blank' rel="noopener noreferrer">
          <i className='icon code' />
        </a>
      </div>
    </div>
  </div>
</footer>
)