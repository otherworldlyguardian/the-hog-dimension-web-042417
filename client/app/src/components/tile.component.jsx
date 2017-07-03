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
    this.$wrapper = $(`#tile-${this.props.tileIdx}-wrapper`)
    this.domSelf = document.getElementById(`tile-${this.props.tileIdx}`)
  }

  handleMouseOver() {
    // have raise wrapper because its throwing fit re: stacked css animations. add/remove class on that may be easiest
    console.log('IN!', this.$wrapper)
    // this.$wrapper.removeClass("fall")
    // this.$wrapper.addClass("rise")
  }

  handleMouseOut() {
    console.log('OUT!', this.$wrapper)
    // this.$wrapper.removeClass("rise")
    // this.$wrapper.addClass("fall")
  }

  render() {
    // TODO pass as prop instead of unpacking style here
    const style = this.props.tileData.style
    return (
      <div id={`tile-${this.props.tileIdx}-wrapper`} className="tile-wrapper" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <div id={`tile-${this.props.tileIdx}`} className="tile-content" style={style} >
          <h1>Imatile {`${this.props.tileIdx}`}</h1>
        </div>
      </div>
    )
  }
}
