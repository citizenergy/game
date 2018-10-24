import React from 'react'
import {Link} from 'react-router-dom'

import {Title, Dialog, Paragraphs, Footer} from '../App'
import {SETTINGS, img} from '../Welcome'
import './Welcome.css'

const Welcome = () => {
  return (
    <div className='Welcome route'>
      <main className='main'>
        <div className='ui container'>
          <div className='content-wrapper'>
            <div className='ui two column stackable grid'>
              <div className='column'>
                <div className='img-positioner'>
                  <img src={img} />
                </div>
              </div>
              <div className='column'>
                <div className='text-positioner'>
                  <Title color='teal' style='dividing'>{SETTINGS.title}</Title>
                  <hr className='ui hidden divider' />
                  <Paragraphs>{SETTINGS.paragraphs}</Paragraphs>
                  <Dialog color='teal'>
                    <p>{SETTINGS.dialog}</p>
                  </Dialog>
                </div>
              </div>
            </div>
            <hr className='ui hidden section divider' />
            <div className='action-wrapper'>
              <Link to={SETTINGS.action.url} className='ui huge teal icon labeled button'>
                <i className={`${SETTINGS.action.icon} icon`} />
                {SETTINGS.action.title}
              </Link>
              <div className='ui horizontal divider'>
                或者
              </div>
              <Link to={SETTINGS.alternate_action.url} className='ui small basic button'>
                {SETTINGS.alternate_action.title}
                <i className={`${SETTINGS.alternate_action.icon} icon`} />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Welcome
