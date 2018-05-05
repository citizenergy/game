import React from 'react'
import { Link } from 'react-router-dom'

import Placeholder from './Placeholder'

export default (
<main className='App-main' >
  <div className='ui container'>
    <hr className='ui hidden divider' />
    <h1 className='ui header'>
      登登登等～
    </h1>
    {Placeholder}
    <h2 className='ui header'>
      我們找到適合你的城市了！
    </h2>
    <p>
      小編嚴選、簡直是為您量身打造的居住地點，終於姍姍來遲了！
    </p>
    <hr className='ui hidden divider' />
    <p>
      <Link to='/report' className='ui large teal button' >
        看結果
      </Link>
    </p>
    <hr className='ui hidden divider' />
  </div>
</main>
)

