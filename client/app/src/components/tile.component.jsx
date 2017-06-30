import React, { Component } from 'react'
import { render } from 'react-dom'
import toggleRise from '../helpers/tileAnimator.js'

export default class Tile extends Component {
  constructor() {
    super()
    this.state = {
      risen: false
    }
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
  }

  componentDidMount() {
    this.$self = $(`#tile-${this.props.tileIdx}`)
    this.domSelf = document.getElementById(`tile-${this.props.tileIdx}`)
    console.log(this.$self, this.domSelf)
  }

  handleMouseOver() {
      console.log('IN!', this.$self)
  }

  handleMouseOut() {
    console.log('OUT!', this.$self)
  }

  render() {
    const style = this.props.tileData.style
    return (
      <div id={`tile-${this.props.tileIdx}`} className="tile" style={style} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <h1>Imatile {`${this.props.tileIdx}`}</h1>
      </div>
    )
  }
}
