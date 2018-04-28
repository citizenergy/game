import React from 'react'
import org from '../setting/org'

export default (
<footer className='App-footer' >
  <div className='ui container'>
    <div className='App-menu ui text menu'>
      <a href='/' className='icon logo image item'>
        <img src='./logo.png' alt='logo' />
        {org.name}
      </a>
      <div className='right menu'>
        <a className='item' href='https://github.com/citizenergy/game' target='_blank'>
          <i className='icon code' />
          Source code
        </a>
      </div>
    </div>
  </div>
</footer>
)