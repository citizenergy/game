import React, { Component } from 'react'
import { Dimmer } from 'semantic-ui-react'

import geo from '../setting/geo.js'
import TaiwanMap from '../component/Map.js'

class Portal extends Component {

  constructor (props) {

    super(props)

    this.state = {
      area: '',
      dimmer: false
    }

    this.setArea = this.setArea.bind(this)
  }

  setArea(area) {
    this.setState({area: area, dimmer: true})
  }

  closeDimmer() {
    console.log('close')
    this.setState({dimmer: false})
  }

  render() {

    const options = geo[this.state.area] ? geo[this.state.area].region.map((item, index) => (
      <p key={index} style={{margin: '1rem auto', width: 'fit-content'}} >
        <a className='ui button' href={`/${item.id}`} style={{background: geo[this.state.area].color, color: '#fff', margin: '0'}} >
          {item.name}
        </a>
      </p>
    )) : null

    return (
      <Dimmer.Dimmable dimmed={this.state.dimmer} blurring className='App-main'>
        <hr className='ui hidden divider' />
        <h2 className='ui header'>
          我想住在...
        </h2>
        <TaiwanMap onClick={this.setArea} />
        <hr className='ui hidden section divider' />
        <Dimmer active={this.state.dimmer} onClickOutside={() => this.closeDimmer()} className='Portal-dimmer' >
          <span onClick={() => this.closeDimmer()} className='ui basic inverted icon button' style={{position: 'absolute', right: '1rem', top: '1rem', margin: '0'}} >
            <i className='icon remove' />
          </span>
          <hr className='ui hidden divider' />
          <h2 className='ui inverted header'>
            {geo[this.state.area] ? geo[this.state.area].name : ''}
          </h2>
          {options}
        </Dimmer>
      </Dimmer.Dimmable>
    )
  }


}

export default Portal