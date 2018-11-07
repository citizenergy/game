import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import './Complete.css'

export default () => {
  return (
    <div className='Complete ui container'>
      <h1 className='ui icon header'>
        <i className='icon pink map marker alternate' />
        <div className='content'>
          登登登等～
          <div className='sub header'>
            我們找到適合你的城市了！
          </div>
        </div>
      </h1>
      <hr className='ui hidden divider' />
      <Link to='/report' className='ui pink button'>
        看結果
        <i className='icon right chevron' />
      </Link>
    </div>
  )
}
