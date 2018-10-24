import React from 'react'
import PropTypes from 'prop-types'

import './Title.css'

const Title = (props) => {
  const TitleTag = props.tag
  return (
    <TitleTag className={`Title ui ${props.style} ${props.color} header`}>
      {props.children}
    </TitleTag>
  )
}
Title.defaultProps = {
  tag: 'h1',
  color: '',
  style: ''
}
Title.propTypes = {
  tag: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.string,
  children: PropTypes.string
}

export default Title
