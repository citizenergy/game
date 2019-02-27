import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import IMG from './IMG'
import './Complete.css'

export default () => {
  const img = IMG.complete
  return (
    <div className='Complete ui container'>
    <div className='content-wrapper'>
      <div className='img-holder' style={{backgroundImage: `url(${img})`}} />
      <h1 className='ui pink header'>
        登登登等～
        <div className='sub header'>
          我們找到適合你的城市了！
        </div>
      </h1>
      <hr className='ui hidden divider' />
      <p>
        小編嚴選、簡直是為您量身打造的居住地點，終於姍姍來遲了...
      </p>
      <hr className='ui hidden divider' />
      <Link to='/report' className='ui pink button'>
        看結果
        <i className='icon right chevron' />
      </Link>
    </div>
    </div>
  )
}
