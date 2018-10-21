import React from 'react'
import {Link} from 'react-router-dom'

import {Footer} from '../App'

import TaiwanMap from './Map'
import REGIONS from './REGIONS'
import COUNTIES from './COUNTIES'
import SETTINGS from './SETTINGS'
import './Portal.css'

const Portal = ({params}) => {
  if (params) {
  }
  return (
    <div className='Portal route'>
      <main className='Main'>
        <div className='ui container'>
          <TaiwanMap />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Portal
