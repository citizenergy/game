import React from 'react'
import PropTypes from 'prop-types'

import {ANSWERS} from '../Quiz'

import './Answer.css'

export default ({quizData, answer, handleTutAckClick}) => {
  const quizID = quizData.id
  const answerData = ANSWERS[quizID]
  const correctAnswer = answerData.correctAnswer
  const answerTitle = quizData.options.filter((option) => option.value === answer)[0].title
  const correctAnswerTitle = quizData.options.filter((option) => option.value === correctAnswer)[0].title
  const title = answer === correctAnswer ? '你答對了！' : '不是這樣的噢！正確答案是：'
  const img = require(`./${quizID}-answer.png`)
  return (
    <div className='Answer ui container'>
      {answer !== correctAnswer ? (
        <h2 className='ui pink block header'>
          <span className='ui pink left corner label'>
            <i className='icon delete' />
          </span>
          {answerTitle}
        </h2>
      ) : null}
      <h1 className='ui small header'>
        {title}
      </h1>
      <h2 className='ui teal block header'>
        <span className='ui teal left corner label'>
          <i className='icon checkmark' />
        </span>
        {correctAnswerTitle}
      </h2>
      <hr className='ui hidden divider' />
      <div className='ui two column stackable grid'>
        <div className='column'>
          <div className='img-holder' style={{backgroundImage: `url(${img})`}} />
        </div>
        <div className='column'>
          <div className='text-positioner'>
            {answerData.paragraphs.map((p, pIndex) => (
              <p key={pIndex}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
      <hr className='ui hidden divider' />
      <span className='ui pink button' onClick={handleTutAckClick}>
        朕知道了
      </span>
    </div>
  )
}
