import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

import {Title, Dialog, Paragraphs, Footer} from '../App'
import {Progress, Options, QUIZS, SETTINGS} from '../Quiz'

import './Quiz.css'

class Quiz extends React.Component {

  initialState = {
    progress: 0,
    answers: {},
    result: this.props.result
  }
  state = Object.assign({}, this.initialState)

  handleOptionClick = (e) => {
    const answer = e.target.getAttribute('data-value')
    const quizID = SETTINGS[this.state.progress]
    this.setState((prevState, props) => {
      prevState.answers[quizID] = answer
      prevState.result = this.updateResult({...prevState})
      if (prevState.result.size === 1 || prevState.progress + 1 === SETTINGS.length) {
        this.props.handleQuizFinish(prevState.result)
      } else {
        prevState.progress += 1
      }
      return prevState
    })
  }
  handleBackClick = () => {
    if (this.state.progress === 0) {
      this.props.history.push('/')
    } else {
      this.setState((prevState, props) => {
        prevState.progress -= 1
        return prevState
      })
    }
  }
  updateResult = ({result, answers}) => {
    console.log(result)
    console.log(answers)
    return result
  }

  render () {
    console.log(this.state)
    const quizID = SETTINGS[this.state.progress]
    const quizData = QUIZS[quizID]
    const progress = (this.state.progress + 1) * 100 / SETTINGS.length
    const img = require(`./${quizID}.png`)
    return (
      <div className='Quiz route'>
        <Progress>{progress}</Progress>
        <main className='main'>
          <div className='ui container'>
            <div className='content-wrapper'>
              <div className='ui two column stackable grid'>
                <div className='column img-wrapper'>
                  <div className='img-positioner'>
                    <img src={img} />
                  </div>
                </div>
                <div className='column text-wrapper'>
                  <div className='text-positioner'>
                    <Title color='pink' tag='h2'>{quizData.title}</Title>
                    <Paragraphs>{quizData.paragraphs}</Paragraphs>
                  </div>
                </div>
              </div>
              <Dialog color='pink'>
                <p>{quizData.dialog}</p>
                <Options answer={this.state.answers[quizID]} handleOptionClick={this.handleOptionClick} options={quizData.options} />
              </Dialog>
              <div onClick={this.handleBackClick} className='ui small basic button'>
                <i className='left chevron icon' />
                回上頁
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
Quiz.propTypes = {
}

export default withRouter(Quiz)
