import React, { Component } from 'react'
import { render } from 'react-dom'
import ColourFadeImg from './colourFadeImg.component.jsx'

export default class Tile extends Component {

  componentDidMount() {
    // TODO exists a built in 'react' way of doing this. do it instead of this sloppy dop
    this.$self = $(`#tile-${this.props.tileIdx}`)
    this.$wrapper = $(`#tile-${this.props.tileIdx}-wrapper`)
  }

  render() {
    // TODO pass as prop instead of unpacking style here
    // Our wrapper is for the 'unfolding' of the tiles, and the content has the scale transition (can't double up css transitions without janky altering)
    const data = this.props.tileData
    const style = data.style
    return (
      <div id={`tile-${this.props.tileIdx}-wrapper`} className="tile-wrapper" >
        <div id={`tile-${this.props.tileIdx}`} className="tile-content" style={style} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
          <ColourFadeImg colourImg={data.colourImg} bwImg={data.bwImg} />
        </div>
      </div>
    )
  }
}
