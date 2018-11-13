import React from 'react'
import {Link} from 'react-router-dom'

import PATH from './PATH'
import './Map.css'

export default () => (
  <svg className='Map' version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='255.121px' height='430.531px' viewBox='0 0 255.121 430.531'>
    This svg is derivated from Eason Hsieh's work at https://codepen.io/hahamimidido/pen/wGRrza
    <Link to='/portal/north' className='north group'>
      {PATH.new_taipei_city}
      {PATH.keelung_city}
      {PATH.taipei_city}
      {PATH.hsinchu_county}
      {PATH.taoyuan_city}
      {PATH.hsinchu_city}
    </Link>
    <Link to='/portal/middle' className='middle group'>
      {PATH.miaoli_county}
      {PATH.nantou_county}
      {PATH.taichung_city}
      {PATH.changhua_county}
      {PATH.yunlin_county}
    </Link>
    <Link to='/portal/south' className='south group'>
      {PATH.chiayi_county}
      {PATH.chiayi_city}
      {PATH.tainan_city}
      {PATH.kaohsiung_city}
      {PATH.pingtung_county}
    </Link>
    <Link to='/portal/east' className='east group'>
      {PATH.yilan_county}
      {PATH.hualien_county}
      {PATH.taitung_county}
    </Link>
  </svg>
)
