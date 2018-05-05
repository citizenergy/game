import React, { Component } from 'react'
import { Dimmer } from 'semantic-ui-react'

import region from '../setting/region.js'
import county from '../setting/county.js'

import TaiwanMap from '../component/Map.js'

class Portal extends Component {

  constructor (props) {

    super(props)

    this.state = {
      currentRegion: '',
      dimmer: false
    }

    this.setRegion = this.setRegion.bind(this)
  }

  setRegion(currentRegion) {
    this.setState({currentRegion: currentRegion, dimmer: true})
  }

  closeDimmer() {
    this.setState({dimmer: false})
  }

  render() {
    const currentRegion = region[this.state.currentRegion]

    const options = currentRegion ? currentRegion.county.map((id, index) => (
      <p key={index} style={{margin: '1rem auto', width: 'fit-content'}} >
        <a className={`ui ${this.state.currentRegion} black button`} href={`/${id}`} >
          {county[id].name}
        </a>
      </p>
    )) : null

    return (
      <Dimmer.Dimmable dimmed={this.state.dimmer} blurring className='App-main'>
        <hr className='ui hidden divider' />
        <h2 className='ui header'>
          我想住在...
        </h2>
        <TaiwanMap onClick={this.setRegion} />
        <hr className='ui hidden section divider' />
        <Dimmer active={this.state.dimmer} onClickOutside={() => this.closeDimmer()} className='Portal-dimmer' >
          <span onClick={() => this.closeDimmer()} className='ui basic inverted icon button' style={{position: 'absolute', right: '1rem', top: '1rem', margin: '0'}} >
            <i className='icon remove' />
          </span>
          <h2 className='ui inverted header'>
            {currentRegion ? currentRegion.name : ''}
          </h2>
          <p>
            {currentRegion ? currentRegion.description : ''}
          </p>
          <hr className='ui hidden divider' />
          {options}
        </Dimmer>
      </Dimmer.Dimmable>
    )
  }


}

export default Portal