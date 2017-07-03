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
    this.$float = $(`#tile-${this.props.tileIdx}-float`)
    this.domSelf = document.getElementById(`tile-${this.props.tileIdx}`)
  }

  handleMouseOver() {
    // have raise wrapper because its throwing fit re: stacked css animations. add/remove class on that may be easiest
    this.$float.addClass("rise")
  //   $("#logo").click(function() {
  //   // not gonna work
  //   $(this).removeClass("run-animation").addClass("run-animation");
  // });
  }

  handleMouseOut() {
    console.log('OUT!', this.$self)
    this.$float.removeClass("rise")

  }

  render() {
    const style = this.props.tileData.style
    return (
      <div id={`tile-${this.props.tileIdx}-float`}>
        <div id={`tile-${this.props.tileIdx}`} className="tile" style={style} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
          <h1>Imatile {`${this.props.tileIdx}`}</h1>
        </div>
      </div>
    )
  }
}
