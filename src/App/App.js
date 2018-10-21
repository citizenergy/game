import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom'

import {Header, Footer} from '../App'
import {Welcome} from '../Welcome'
import './App.css'

class App extends React.Component {
  initialState = {
    matchedCounties: []
  }
  state = this.initialState
  handleQuizReset = () => {
    this.setState(this.initialState)
  }
  render () {
    return (
      <Router>
        <div className='App'>
          <Header handleQuizReset={this.handleQuizReset} />
          <div className='Body'>
            <Switch>
              <Route exact path='/' render={() => <Welcome />} />
              <Route exact path='/quiz' render={() => <p>Quiz</p>} />
              <Route exact path='/quiz/complete' render={() => <p>Complete</p>} />
              <Route exact path='/report' render={() => <p>Report</p>} />
              <Route exact path='/portal/:region?' render={() => <p>Portal - Region?</p>} />
              <Route render={() => <Redirect to='/' />} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
