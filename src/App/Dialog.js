import React from 'react'
import PropTypes from 'prop-types'

import './Dialog.css'

const Dialog = (props) => {
  const DialogTag = props.tag
  return (
    <DialogTag className={`Dialog ${props.color}`}>
      {props.children}
    </DialogTag>
  )
}
Dialog.defaultProps = {
  tag: 'div',
  color: 'teal'
}
Dialog.propTypes = {
  tag: PropTypes.string,
  color: PropTypes.oneOf(['pink', 'teal']),
  children: PropTypes.node
}

export default Dialog
