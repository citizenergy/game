import React from 'react'
import {Link} from 'react-router-dom'

import REGIONS from './REGIONS'
import COUNTIES from './COUNTIES'

const Region = ({region}) => {
  return (
    <div className='Region'>
      <h2 className='ui header'>
        {REGIONS[region].title}
      </h2>
      <p>
        {REGIONS[region].description}
      </p>
      <hr className='ui hidden divider' />
      {REGIONS[region].county.map((countyID) => (
        <p key={countyID}>
          <a href={`/${countyID}`} className={`ui teal ${COUNTIES[countyID].status} button`} target='_blank'>
            {COUNTIES[countyID].title}
          </a>
        </p>
      ))}
      <hr className='ui hidden divider' />
      <Link to='/portal' className='ui basic button'>
        <i className='left chevron icon' />
        讓我再想一下
      </Link>
    </div>
  )
}

export default Region
