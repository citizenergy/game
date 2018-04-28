import React, { Component } from 'react'

import TaiwanMap from './component/Map.js'
import Footer from './component/Footer.js'
import Header from './component/Header.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {Header}
        <section className='App-welcome'>
          <div className='ui container'>
            <hr className='ui hidden fitted divider' />
            <h1 className="ui header">
              某某星球爆炸了 ∫OoO∫
            </h1>
            <div className='ui large image'>
              <img src='./placeholder.png' alt='placeholder' />
            </div>
            <h2 className="ui header">
              你搭乘太空船逃到地球...
            </h2>
            <p>
              用太空技術技術做為交換，說服了台灣國民讓你在這裡生活。
            </p>
            <p>
              台灣很大，你想定居在哪個縣市呢？
            </p>
            <hr className='ui hidden divider' />
            <p>
              <span className='ui huge teal button'>
                找出適合我的縣市
              </span>
            </p>
            <hr className='ui hidden divider' />
            <div className='ui horizontal divider'>
              or
            </div>
            <hr className='ui hidden divider' />
            <p>
              我已經決定好了↓
            </p>
          </div>
        </section>
        <hr className='ui hidden divider' />
        {TaiwanMap}
        <hr className='ui hidden section divider' />
        {Footer}
      </div>
    );
  }
}

export default App;
