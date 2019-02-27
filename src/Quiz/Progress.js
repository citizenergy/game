import React from 'react'
import PropTypes from 'prop-types'

import './Progress.css'

const Progress = (props) => {
  return (
    <div className='Progress'>
      <div className='ui tiny pink progress'>
        <div className='bar' style={{width:`${props.children}%`}}></div>
      </div>
    </div>
  )
}
Progress.propTypes = {
  children: PropTypes.number
}

export default Progress
