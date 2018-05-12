import React from 'react'
import { Link } from 'react-router-dom'

import path from '../setting/path'
import app from '../setting/app'
import Placeholder from './Placeholder'

export default ({onStart}) => (
<main className='App-main welcome' >
  <div className='ui container'>
    <hr className='ui hidden divider' />
    <h1 className="ui header">
      {app.name}
    </h1>
    <hr className='ui hidden divider' />
    <p className='description' >
      經歷長達四十年的能源戰爭，ＯＯ星球爆炸了！
    </p>
    <p className='description' >
      危急中，你搭乘太空船從ＯＯ星球逃出來，聽說能源災難是全宇宙的共同問題，你懷著最後的希望，
    </p>
    <p className='description' >
      降落在地球的一個神秘的島嶼——台灣，你將要在島上尋找理想中的能源家園……
    </p>
    <hr className='ui hidden divider' />
    <h2 className='ui header' >
      「這個島嶼說大也不大，但有山有海，<br />
      我定居在哪裡好呢？」
    </h2>
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

