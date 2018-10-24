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
  handleQuizFinish = (newCounties) => {
    this.setState({result: newCounties})
  }
  render () {
    console.log(this.state)
    return (
      <Router>
        <div className='App'>
          <Header handleQuizReset={this.handleQuizReset} />
          <div className='Body'>
            <Switch>
              <Route exact path='/' render={() => <Welcome />} />
              <Route exact path='/quiz' render={() => <Quiz result={this.state.result} handleQuizFinish={this.handleQuizFinish} />} />
              <Route exact path='/quiz/complete' render={() => <p>Complete</p>} />
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
