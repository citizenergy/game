import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import path from './setting/path'
import quiz from './setting/quiz'
import county from './setting/county'
import plant from './setting/plant'
import energy from './setting/energy'
import category from './setting/category'

import Header from './component/Header.js'
import Home from './component/Home.js'
import Finished from './component/Finished.js'
import Portal from './container/Portal.js'
import Footer from './component/Footer.js'
import Placeholder from './component/Placeholder'

import './App.css'

// prepare for data parsing

const countyList = Object.keys(county)

const aspect = [
  'industry',
  'green',
  'saving',
  'participative',
  'data',
]

let candidate = {}

// parse plant data

let candidateData = {}
plant.forEach((plantItem, plantIndex) => {
  const currentCategory = energy[plantItem.energy].category
  if (!candidateData[currentCategory]) {
    candidateData[currentCategory] = new Set()
  }
  candidateData[currentCategory].add(plantItem.county)
})
candidate.plant = candidateData

// parse other data

countyList.forEach((countyItem, countyIndex) => {
  aspect.forEach((aspectItem, aspectIndex) => {
    if (!candidate[aspectItem]) {
      candidate[aspectItem] = {}
    }
    county[countyItem][aspectItem].forEach((attribute, attrIndex) => {
      if (!candidate[aspectItem][attribute]) {
        candidate[aspectItem][attribute] = new Set()
      }
      candidate[aspectItem][attribute].add(countyItem)
    })
  })
})

// check result

console.log(candidate)

class App extends Component {

  constructor (props) {

    super(props)

    this.state = {
      view: 'home',
      current: 0,
      answer: {},
      result: new Set(countyList)
    }

    this.start = this.start.bind(this)
    this.setAnswer = this.setAnswer.bind(this)
    this.resetGame = this.resetGame.bind(this)
  }

  start() {
    console.log(this.state.result)
    this.setState({
      view: 'quiz'
    })
  }

  setAnswer(quizId, answerValue) {
    this.setState((prevState, props) => {

      prevState.answer[quizId] = answerValue

      if (answerValue === 'none') {
        return {
          answer: prevState.answer,
          current: prevState.current + 1
        }
      }

      let newResult = new Set();
      for (const elem of prevState.result) {
        if (!candidate[quizId]) {
          console.log(`no ${quizId} in ${candidate} `)
        } else if (!candidate[quizId][answerValue]) {
          console.log(`no ${answerValue} in ${candidate[quizId]} `)
        } else if (candidate[quizId][answerValue].has(elem)) {
          newResult.add(elem);
        }
      }
      console.log(newResult)
      return {
        answer: prevState.answer,
        result: newResult,
        current: prevState.current + 1
      }
    }, () => {
      if ( this.state.result.size < 2 || this.state.current === quiz.length ) {
        this.setState({view: 'finished'})
      }
    })
  }

  resetGame() {
    this.setState({
      view: 'home',
      current: 0,
      answer: {},
      result: new Set(countyList)
    })
  }

  renderReport() {

    const list = Array.from(this.state.result).map((resultItem, resultIndex) => {
      return (
        <p key={resultItem} >{resultItem}</p>
      )
    })

    return (
      <section className='App-main' >
        <div className='ui container'>
          <hr className='ui hidden divider' />
          <h2 className='ui header'>
            你適合住在...
          </h2>
          <hr className='ui hidden divider' />
          {list}
          <hr className='ui hidden divider' />
        </div>
      </section>
    )
  }

  renderQuiz() {

    if (this.state.view === 'home') {
      return (<Home onStart={this.start} />)
    }

    if (this.state.view === 'finished') {
      return Finished
    }

    if (this.state.view !== 'quiz') {
      return (<p>error</p>)
    }

    const quizItem = quiz[this.state.current]
    if (!quizItem || !quizItem.option) {
      return null
    }

    let Option = quizItem.option.map((option, order) => {
      let showOption = false
      if (option.value === 'none') {
        showOption = true
      } else {
        for (const resultItem of this.state.result) {
          if (!candidate[quizItem.id]) {
            console.log(`no ${quizItem.id} in ${candidate} `)
          } else if (!candidate[quizItem.id][option.value]) {
            console.log(`no ${option.value} in ${candidate[quizItem.id]} `)
          } else if (candidate[quizItem.id][option.value].has(resultItem)) {
            showOption = true
          }
        }
      }
      if (!showOption) {
        return null
      }
      return (
        <p key={order} >
          <a onClick={() => this.setAnswer(quizItem.id, option.value)} className='ui basic black button'>
            {option.display}
          </a>
        </p>
      )
    })

    Option = Option.filter(item => item !== null)

    if (Option.length === 0) {
      return Finished
    }

    return (
      <section className='App-main' data-mode={this.state.view} >
        <div className='ui container'>
          <hr className='ui hidden divider' />
          <h1 className='ui header'>
            {quizItem.title}
          </h1>
          {Placeholder}
          <h2 className='ui header'>
            {quizItem.subtitle}
          </h2>
          <p>
            {quizItem.description}
          </p>
          <hr className='ui hidden divider' />
          {Option}
          <hr className='ui hidden divider' />
        </div>
      </section>
    )
  }

  render() {

    const Quiz = this.renderQuiz()

    const Report = this.renderReport()

    return (
      <Router basename={`/${path.base}`} >
      <div className="App">
        <Header onReset={this.resetGame} />
        <Route exact path={`/`} component={() => Quiz}/>
        <Route exact path={`/${path.portal}`} component={Portal}/>
        <Route exact path={`/${path.report}`} component={() => Report}/>
        {Footer}
      </div>
      </Router>
    );
  }
}

export default App;
