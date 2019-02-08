import React from 'react'
import {HashRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom'

import {Header, Footer} from '../App'
import {Welcome} from '../Welcome'
import {Portal, COUNTIES} from '../Portal'
import {Quiz} from '../Quiz'
import {Report} from '../Report'
import './App.css'

class App extends React.Component {
  initialState = {
    result: new Set(Object.keys(COUNTIES)),
    answers: null
  }
  state = Object.assign({}, this.initialState)
  handleQuizReset = () => {
    this.setState(this.initialState)
  }
  handleQuizFinish = ({result, answers, action}) => {
    this.setState({result, answers}, () => {action()})
  }
  render () {
    console.log(this.state)
    return (
      <Router>
        <div className='App'>
          <Header handleQuizReset={this.handleQuizReset} />
          <div className='Body'>
            <Switch>
              <Route exact path='/' render={() => <Welcome handleQuizReset={this.handleQuizReset} />} />
              <Route exact path='/quiz/:status?' render={({match}) => <Quiz match={match} intitalResult={this.initialState.result} handleQuizFinish={this.handleQuizFinish} handleQuizReset={this.handleQuizReset} />} />
              <Route exact path='/report' render={() => <Report {...this.state} handleQuizReset={this.handleQuizReset}/>} />
              <Route exact path='/portal/:region?' render={({match}) => <Portal match={match} />} />
              <Route render={() => <Redirect to='/' />} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
