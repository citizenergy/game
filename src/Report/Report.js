import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

import {Footer} from '../App'
import {COUNTIES} from '../Portal'

import './Report.css'

export default ({result}) => {
  let countiesList = []
  result.forEach((county) => {
    countiesList.push(
      <p key={county}>
        {COUNTIES[county].title}
      </p>
    )
  })
  return (
    <div className='Report route'>
      <main className='main'>
        <div className='ui container'>
          <h1 className='ui header'>
            你適合住在
          </h1>
          {countiesList}
          <hr className='ui hidden divider' />
          <Link to='/' className='ui small basic button'>
            <i className='left redo icon' />
            再玩一次
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
