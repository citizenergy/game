import React from 'react'
import { Link } from 'react-router-dom'

import path from '../setting/path'

export default ({onStart}) => (
  <main className='App-main'>
    <div className='ui container'>
      <hr className='ui hidden divider' />
      <h1 className="ui header">
        某某星球爆炸了 ∫OoO∫
      </h1>
      <div className='ui large image'>
        <img src='./placeholder.png' alt='placeholder' />
      </div>
      <h2 className="ui header">
        你搭乘太空船逃到地球...
      </h2>
      <p>
        用太空技術技術做為交換，說服了台灣國民讓你在這裡生活。
      </p>
      <p>
        台灣很大，你想定居在哪個縣市呢？
      </p>
      <hr className='ui hidden divider' />
      <p>
        <a onClick={() => onStart() } className='ui huge teal button'>
          找出適合我的縣市
        </a>
      </p>
      <hr className='ui hidden divider' />
      <div className='ui horizontal divider'>
        or
      </div>
      <hr className='ui hidden divider' />
      <p>
        <Link to={`/${path.portal}`} className='ui basic teal button' >
          我已經決定好了
        </Link>
      </p>
      <hr className='ui hidden section divider' />
    </div>
  </main>
)

