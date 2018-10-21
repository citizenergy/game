import React from 'react'

import OWNER from './OWNER'
import SETTINGS from './SETTINGS'
import banner from './banner.png'

export default () => {
  return (
    <footer className='Footer' >
      <div className='ui container'>
        <div className='grid'>
          <a href='/' className='ui image banner'>
            <img src={banner} alt={`logo of ${OWNER.name}`} />
          </a>
          <a className='source' href={SETTINGS.source} target='_blank' rel='noopener noreferrer'>
            <i className='icon code' />
          </a>
        </div>
      </div>
    </footer>
  )
}
