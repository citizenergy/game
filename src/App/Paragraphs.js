import React from 'react'
import PropTypes from 'prop-types'

const Paragraphs = (props) => {
  return props.children.map((p, pIndex) => {
    return (
      <p key={pIndex} className='Paragraphs'>
        {p}
      </p>
    )
  })
}
Paragraphs.propTypes = {
  children: PropTypes.array
}

export default Paragraphs
