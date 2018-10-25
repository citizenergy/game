import React from 'react'
import {HashRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom'

import {Header, Footer} from '../App'
import {Welcome} from '../Welcome'
import {Portal, COUNTIES} from '../Portal'
import {Quiz} from '../Quiz'
import './App.css'

class App extends React.Component {
  initialState = {
    result: new Set(Object.keys(COUNTIES))
  }
  state = Object.assign({}, this.initialState)
  handleQuizReset = () => {
    this.setState(this.initialState)
  }
  handleQuizFinish = ({result, action}) => {
    this.setState({result}, () => {action()})
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
              <Route exact path='/quiz/:status?' render={({match}) => <Quiz match={match} result={this.state.result} handleQuizFinish={this.handleQuizFinish} handleQuizReset={this.handleQuizReset} />} />
              <Route exact path='/report' render={() => <p>Report</p>} />
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
