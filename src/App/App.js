import React from 'react'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom'

import {Header, Footer} from '../App'
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
          <Header />
          <main className='Main'>
            <Route exact path='/' render={() => <p>Welcome</p>} />
            <Route exact path='/quiz' render={() => <p>Quiz</p>} />
            <Route exact path='/complete' render={() => <p>Complete</p>} />
            <Route exact path='/report' render={() => <p>Report</p>} />
            <Route exact path='/portal/:region?' render={() => <p>Portal - Region?</p>} />
            <Route render={() => <Redirect to='/' />} />
          </main>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
