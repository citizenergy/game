import React from 'react'
import {Link} from 'react-router-dom'

import {Footer} from '../App'

import TaiwanMap from './Map'
import TaiwanRegion from './Region'
import SETTINGS from './SETTINGS'
import './Portal.css'

const Portal = ({match}) => {
  const region = match.params.region

  const validParams = ['north', 'south', 'east', 'middle']
  const isRegionVisible = validParams.includes(region)
  const floorState = isRegionVisible ? 'is-blurred' : ''

  return (
    <div className='Portal route'>
      <main className='main'>
        <div className={`floor ${floorState}`}>
          <div className='ui container'>
            <h1 className='ui header'>
              {SETTINGS.title}
            </h1>
            <TaiwanMap />
            <hr className='ui hidden divider' />
            <Link to={SETTINGS.alternate_action.url} className='ui basic button'>
              <i className={`icon ${SETTINGS.alternate_action.icon}`} />
              {SETTINGS.alternate_action.title}
            </Link>
          </div>
        </div>
        {isRegionVisible
          ? (
            <div className='roof'>
              <TaiwanRegion region={region} />
            </div>
          ) : null}
      </main>
      <Footer />
    </div>
  )
}

export default Portal
