import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import path from './setting/path'
import quiz from './setting/quiz'
import county from './setting/county'
import plant from './setting/plant'
import energy from './setting/energy'
import category from './setting/category'

import Header from './component/Header.js'
import Home from './component/Home.js'
import Portal from './container/Portal.js'
import Footer from './component/Footer.js'

import './App.css'

// organize data

const countyList = Object.keys(county)

const aspect = [
  'industry',
  'green',
  'saving',
  'participative',
  'data',
]

let candidate = {}

// parse plant

let candidateData = {}
plant.forEach((plantItem, plantIndex) => {
  const currentCategory = energy[plantItem.energy].category
  if (!candidateData[currentCategory]) {
    candidateData[currentCategory] = new Set()
  }
  candidateData[currentCategory].add(plantItem.county)
})
candidate.plant = candidateData

// parse others

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
  }

  start() {
    this.setState({
      view: 'quiz'
    })
  }

  setAnswer(quizId, answerValue) {
    this.setState((prevState, props) => {

      prevState.answer[quizId] = answerValue

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
      return (
      <section className='App-main' >
        <div className='ui container'>
          <hr className='ui hidden divider' />
          <p>
            <Link to='/report' className='ui large teal button' >
              report
            </Link>
          </p>
          <hr className='ui hidden divider' />
        </div>
      </section>
      )
    }

    if (this.state.view !== 'quiz') {
      return (<p>error</p>)
    }

    const quizItem = quiz[this.state.current]
    if (!quizItem || !quizItem.option) {
      return null
    }

    const OptionJSX = quizItem.option.map((option, order) => {
      let showOption = false
      for (const resultItem of this.state.result) {
        if (!candidate[quizItem.id]) {
          console.log(`no ${quizItem.id} in ${candidate} `)
        } else if (!candidate[quizItem.id][option.value]) {
          console.log(`no ${option.value} in ${candidate[quizItem.id]} `)
        } else if (candidate[quizItem.id][option.value].has(resultItem)) {
          showOption = true
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

    return (
      <section className='App-main' >
        <div className='ui container'>
          <hr className='ui hidden divider' />
          <h2 className='ui header'>
            {quizItem.title}
          </h2>
          {OptionJSX}
          <hr className='ui hidden divider' />
        </div>
      </section>
    )
  }

  render() {

    const QuizJSX = this.renderQuiz()

    const Report = this.renderReport()

    return (
      <Router basename={`/${path.base}`} >
      <div className="App">
        {Header}
        <Route exact path={`/`} component={() => QuizJSX}/>
        <Route exact path={`/${path.portal}`} component={Portal}/>
        <Route exact path={`/${path.report}`} component={() => Report}/>
        {Footer}
      </div>
      </Router>
    );
  }
}

export default App;
