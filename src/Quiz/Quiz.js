import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

import {Title, Dialog, Paragraphs, Footer} from '../App'
import {Progress, Options, Answer, Complete, QUIZS, SETTINGS, IMG} from '../Quiz'
import {GameData} from './RAW'

import './Quiz.css'

class Quiz extends React.Component {

  initialState = {
    gameData: {},
    progress: 0,
    answers: {},
    result: null,
    isImgVisible: true,
    isTutVisible: false
  }
  state = Object.assign({}, this.initialState)

  handleDataLoad = ({key, value}) => {
    this.setState((prevState, props) => {
      prevState.gameData[key] = value
      return prevState
    })
  }
  handleOptionClick = (e) => {
    const answer = e.target.dataset.value
    this.setState((prevState, props) => {
      const quizID = SETTINGS[prevState.progress]
      // set answer no matter wat type of quiz it is
      prevState.answers[quizID] = answer
      // show tutorial if it's a tut
      if (QUIZS[quizID].type === 'tut') {
        prevState.isTutVisible = true
        return prevState
      }
      // otherwise update result if it's a normal quiz
      prevState.result = this.calculateResult({...prevState})
      // complete quiz if the result can't be cut down anymore
      if (prevState.result.size === 1
        || prevState.progress + 1 === SETTINGS.length
        || this.calculateOptions({progress: prevState.progress + 1, answers: prevState.answers}).length === 0
        || this.calculateOptions({progress: prevState.progress + 1, answers: prevState.answers}).filter((option) => option.value !== 'any').length === 0
      ) {
        this.props.handleQuizFinish({result: prevState.result, action: () => {this.props.history.push('/quiz/complete')}})
      // otherwise go to next quiz
      } else {
        prevState.progress += 1
        prevState.isImgVisible = false
        return prevState
      }
    }, () => {
      // when going to next quiz, fade in the image
      if (!this.state.isImgVisible) {
        this.setState({isImgVisible: true})
      }
    })
  }
  handleBackClick = () => {
    if (this.state.progress === 0) {
      this.props.handleQuizReset()
      this.props.history.push('/')
    } else {
      this.setState((prevState, props) => {
        prevState.progress -= 1
        prevState.isImgVisible = false
        prevState.result = this.calculateResult({...prevState})
        return prevState
      }, () => {
        this.setState({isImgVisible: true})
      })
    }
  }
  handleTutAckClick = () => {
    this.setState((prevState, props) => {
      prevState.isTutVisible = false
      prevState.progress += 1
      prevState.isImgVisible = false
    }, () => {
      this.setState({isImgVisible: true})
    })
  }
  calculateOptions = ({progress, answers}) => {
    const quizID = SETTINGS[progress]
    const quizData = QUIZS[quizID]
    if (quizData.type !== 'quiz') {
      return quizData.options
    }
    const filteredOptions = quizData.options.filter((option) => {
      let mockAnswers = Object.assign({}, answers)
      mockAnswers[quizID] = option.value
      const mockResult = this.calculateResult({progress, answers: mockAnswers})
      return mockResult.size > 0
    })
    return filteredOptions
  }
  calculateResult = ({progress, answers}) => {
    let newResult = this.props.intitalResult
    for (let i = 0; i <= progress; i++) {
      const quizID = SETTINGS[i]
      if (QUIZS[quizID].type === 'tut' || answers[quizID] === 'any' || !this.state.gameData[quizID]) {
        continue
      }
      let intersectionSet = new Set()
      const validCountiesSet = this.state.gameData[quizID][answers[quizID]]
      for (let elem of newResult) {
        if (validCountiesSet.has(elem)) {
          intersectionSet.add(elem)
        }
      }
      newResult = intersectionSet
    }
    return newResult
  }

  render () {
    console.log(this.state)
    const quizID = SETTINGS[this.state.progress]
    const answer = this.state.answers[quizID]
    const quizData = QUIZS[quizID]
    const progress = (this.state.progress + 1) * 100 / SETTINGS.length
    const filteredOptions = this.calculateOptions({...this.state})
    const img = IMG[quizID]
    return (
      <div className='Quiz route'>
        <GameData gameData={this.state.gameData} handleDataLoad={this.handleDataLoad} />
        <Progress>{progress}</Progress>
        <main className='main'>
        <div className={`floor ${this.state.isTutVisible || this.props.match.params.status === 'complete' ? 'is-blurred' : ''}`}>
          <div className='ui container'>
            <div className='content-wrapper'>
              <div className='ui two column stackable grid'>
                <div className='column img-wrapper'>
                  <div className='img-positioner'>
                    {this.state.isImgVisible ?
                    <div className='img-holder' style={{backgroundImage: `url(${img})`}} />
                    : null}
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
                <Options answer={answer} handleOptionClick={this.handleOptionClick} options={filteredOptions} />
              </Dialog>
              <div onClick={this.handleBackClick} className='ui small basic button'>
                <i className='left chevron icon' />
                回{this.state.progress === 0 ? '首頁' : '上一題'}
              </div>
            </div>
          </div>
        </div>
        {this.state.isTutVisible ? 
          <div className='roof'>
            <Answer quizData={quizData} answer={answer} handleTutAckClick={this.handleTutAckClick} />
          </div>
          : null}
        {this.props.match.params.status === 'complete' ?
          <div className='roof'>
            <Complete />
          </div>
          : null}
        </main>
        <Footer />
      </div>
    )
  }
}
Quiz.propTypes = {
}

export default withRouter(Quiz)
