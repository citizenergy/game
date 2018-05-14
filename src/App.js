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
import ranking from './setting/ranking'
import placeholder from './image/placeholder.png'

import Header from './component/Header.js'
import Home from './component/Home.js'
import Finished from './component/Finished.js'
import Portal from './container/Portal.js'
import Footer from './component/Footer.js'

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
      quiz_mode: 'normal',
      current: 0,
      answer: {},
      history: {},
      result: new Set(countyList)
    }

    this.start = this.start.bind(this)
    this.setAnswer = this.setAnswer.bind(this)
    this.goNext = this.goNext.bind(this)
    this.goPrev = this.goPrev.bind(this)
    this.resetGame = this.resetGame.bind(this)
  }

  start() {
    console.log(this.state.result)
    this.setState({
      view: 'quiz'
    })
  }

  goNext() {
    this.setState((prevState, props) => ({
      quiz_mode: 'normal',
      current: prevState.current + 1
    }))
  }

  goPrev(quizId) {
    if (this.state.current === 0) {
      this.resetGame()
    } else {
      this.resetAnswer(quizId)
    }
  }

  setAnswer(quizId, answerValue) {
    this.setState((prevState, props) => {

      prevState.answer[quizId] = answerValue

      if (quiz[this.state.current].type === 'tutorial') {
        return {
          answer: prevState.answer,
          quiz_mode: 'tutorial',
        }
      }

      let deletedResult = new Set()
      prevState.history[quizId] = deletedResult
      if (answerValue === 'none') {
        return {
          answer: prevState.answer,
          history: prevState.history,
          current: prevState.current + 1,
        }
      }

      let newResult = new Set()
      for (let elem of prevState.result) {
        if (!candidate[quizId]) {
          console.log(`no ${quizId} in ${candidate} `)
          deletedResult.add(elem)
        } else if (!candidate[quizId][answerValue]) {
          console.log(`no ${answerValue} in ${candidate[quizId]} `)
          deletedResult.add(elem)
        } else if (candidate[quizId][answerValue].has(elem)) {
          newResult.add(elem);
        } else {
          deletedResult.add(elem)
        }
      }
      console.log(newResult)
      prevState.history[quizId] = deletedResult

      return {
        answer: prevState.answer,
        history: prevState.history,
        result: newResult,
        current: prevState.current + 1,
      }
    }, () => {
      if ( this.state.result.size < 2 || this.state.current === quiz.length ) {
        this.setState({view: 'finished'})
      }
    })
  }

  resetAnswer() {

    this.setState((prevState, props) => {

      const quizId = quiz[prevState.current - 1].id
      const historySet = prevState.history[quizId]
      if (historySet) {
        for (let elem of historySet) {
          prevState.result.add(elem);
        }
      }
      delete prevState.answer[quizId]
      delete prevState.history[quizId]

      console.log(prevState.result)
      return {
        answer: prevState.answer,
        history: prevState.history,
        result: prevState.result,
        current: prevState.current - 1,
      }
    })
  }

  resetGame() {
    this.setState({
      view: 'home',
      quiz_mode: 'normal',
      current: 0,
      answer: {},
      history: {},
      result: new Set(countyList)
    })
  }

  renderReport() {

    const list = Array.from(this.state.result).map((resultItem, resultIndex) => {

      const features = county[resultItem].feature
      const result = Object.keys(features).map((featureItem, featureIndex) => (
        <div key={`${featureItem}-${featureIndex}`} className='card' >
          <div className='circular image' >
            <img alt='badge' src={placeholder} />
          </div>
          <div className='center aligned content'>
            {`${ranking[featureItem]}`}<br />
            {`第 ${features[featureItem]} 名`}
          </div>
        </div>
      ))
      return (
        <div key={`${resultItem}-${resultIndex}`} className='ui segment'>
          <a href={`/${resultItem}`} target='_blank' className='ui dividing teal header' style={{display: 'block'}} >
            {county[resultItem].name}
          </a>
          <div className='ui five centered cards' key={resultItem} >
            {result}
          </div>
        </div>
      )
    })

    return (
      <section className='App-main' >
        <div className='ui container'>
          <hr className='ui hidden divider' />
          <h1 className='ui header'>
            你適合住在...
          </h1>
          <hr className='ui hidden divider' />
          {list}
          <hr className='ui hidden divider' />
          <hr className='ui divider' />
          <p>
            <Link onClick={() => this.resetGame()} to='/'>
              <i className='icon redo' />
              再玩一次
            </Link>
          </p>
          <p>
            <Link onClick={() => this.resetGame()} to='/portal'>
              <i className='icon hand rock outline' />
              不管！我已經決定要住哪了
            </Link>
          </p>
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

    if (this.state.quiz_mode === 'tutorial') {
      return (
        <section className='App-main' data-mode={this.state.view} >
          <div className='ui container'>
            <header className='background'>
            <hr className='ui hidden divider' />
            <h1 className='ui header'>
              登登登等～答對了！ / 叭叭叭！猜錯了！
            </h1>
            <h2 className='ui header'>
              （一句話描述正確答案）
            </h2>
            <hr className='ui hidden divider' />
            </header>
            <hr className='ui hidden divider' />
            <p>
              （此題的詳細說明）
            </p>
            <hr className='ui hidden divider' />
            <p>
              <a onClick={() => this.goNext()} className='ui basic black button'>
                繼續
              </a>
            </p>
            <hr className='ui hidden divider' />
          </div>
        </section>
      )
    }

    let Option

    Option = quizItem.option.map((option, order) => {

      if (quizItem.type === 'quiz') {
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

    const Background = quizItem.background.map((p, pIndex) => <p className='description' key={`${p}-${pIndex}`} >{p}</p>)
    const Question = quizItem.question.map((p, pIndex) => <span key={`${p}-${pIndex}`} >{p}<br /></span>)

    return (
      <section className='App-main' data-mode={this.state.view} >
        <div className='ui container'>
          <header className='background'>
          <hr className='ui hidden divider' />
          {Background}
          <hr className='ui hidden divider' />
          </header>
          <h2 className='ui header'>
            {Question}
          </h2>
          <hr className='ui hidden divider' />
          {Option}
          <hr className='ui hidden divider' />
          <hr className='ui divider' />
          <p>
            <a onClick={() => this.goPrev(quizItem.id)}>
              <i className='icon left chevron' />
              回上一題
            </a>
          </p>
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
