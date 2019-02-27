import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const Options = (props) => {
  return (
    <div className='Options'>
      {props.options.map((option, optionIndex) => {
        const buttonStyle = option.value === props.answer ? '' : 'basic'
        return (
          <p key={optionIndex}>
            <span onClick={props.handleOptionClick} data-value={option.value} className={`ui pink ${buttonStyle} button`}>
              {option.title}
            </span>
          </p>
        )
      })}
    </div>
  )
}
Options.propTypes = {
  options: PropTypes.array,
  answer: PropTypes.string,
  handleOptionClick: PropTypes.func
}

export default Options
