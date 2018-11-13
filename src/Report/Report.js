import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

import {Footer} from '../App'
import {COUNTIES, PATH} from '../Portal'

import './Report.css'

export default ({result}) => {
  let countiesList = []
  result.forEach((county) => {
    if (COUNTIES[county].status === 'disabled') {
      return
    }
    countiesList.push(
      <div className='card' key={county}>
        <a className='image' href={`/${county}`} >
          <svg width='255.121px' viewBox={`0 ${COUNTIES[county].y_position} 255.121 180`}>
            {PATH.new_taipei_city}
            {PATH.keelung_city}
            {PATH.taipei_city}
            {PATH.hsinchu_county}
            {PATH.taoyuan_city}
            {PATH.hsinchu_city}
            {PATH.miaoli_county}
            {PATH.nantou_county}
            {PATH.taichung_city}
            {PATH.changhua_county}
            {PATH.yunlin_county}
            {PATH.chiayi_county}
            {PATH.chiayi_city}
            {PATH.tainan_city}
            {PATH.kaohsiung_city}
            {PATH.pingtung_county}
            {PATH.yilan_county}
            {PATH.hualien_county}
            {PATH.taitung_county}
            <g className='active'>
              {PATH[county]}
            </g>
          </svg>
        </a>
        <div className='content'>
          <a className='header' href={`/${county}`} >
            {COUNTIES[county].title}
          </a>
        </div>
      </div>
    )
  })
  return (
    <div className='Report route'>
      <main className='main'>
        <div className='ui container'>
          <div className='content-wrapper'>
            <h1 className='ui header'>
              你適合住在
            </h1>
            <hr className='ui hidden divider' />
            <div className='ui centered cards'>
              {countiesList}
            </div>
            <hr className='ui hidden divider' />
            <Link to='/' className='ui small basic button'>
              <i className='left redo icon' />
              再玩一次
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
