import React from 'react'
import {Link} from 'react-router-dom'

import {Footer} from '../App'
import {array2Paragraphs, string2Dialog} from '../utils'
import SETTINGS from './SETTINGS'
import img from './welcome.png'
import './Welcome.css'

const Welcome = () => {
  return (
    <div className='Welcome route'>
      <main className='Main'>
        <div className='ui container'>
          <div className='ui two column stackable grid'>
            <div className='column'>
              <div className='img-positioner'>
                <img src={img} />
              </div>
            </div>
            <div className='column'>
              <div className='text-positioner'>
                <h1 className='ui section dividing header'>
                  {SETTINGS.title}
                </h1>
                <hr className='ui hidden divider' />
                {array2Paragraphs(SETTINGS.paragraphs)}
                {string2Dialog(SETTINGS.dialog)}
                <Link to={SETTINGS.action.link} className='ui huge teal icon labeled button'>
                  <i className={`${SETTINGS.action.icon} icon`} />
                  {SETTINGS.action.title}
                </Link>
                <div className='ui horizontal divider'>
                  或者
                </div>
                <Link to={SETTINGS.alternate_action.link} className='ui small basic button'>
                  {SETTINGS.alternate_action.title}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Welcome
