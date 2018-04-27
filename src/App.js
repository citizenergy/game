import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='ui container'>
            <nav className='ui secondary menu'>
              <div className='item'>
                <img src='./logo.png' alt='logo' />
              </div>
              <div className='right menu'>
                <div className='item'>
                  <i className='icon sidebar' />
                </div>
              </div>
            </nav>
          </div>
        </header>
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
              我已經決定好了！
            </p>
            <hr className='ui hidden section divider' />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
