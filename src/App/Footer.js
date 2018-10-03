import React from 'react'

import OWNER from './OWNER'
import banner from './banner.png'

export default () => {
  return (
    <footer className='Footer' >
      <div className='ui container'>
        <div className='grid'>
          <a href='/' className='ui image banner'>
            <img src={banner} alt={`logo of ${OWNER.name}`} />
          </a>
          <a className='source' href='https://github.com/citizenergy/game' target='_blank' rel='noopener noreferrer'>
            <i className='icon code' />
          </a>
        </div>
      </div>
    </footer>
  )
}
