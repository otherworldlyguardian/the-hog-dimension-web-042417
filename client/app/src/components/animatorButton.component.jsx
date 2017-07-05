import React, { Component } from 'react'
import { render } from 'react-dom'

//TODO make functional
export default class AnimatorButton extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <img id="animator-button" onClick={this.props.onClick} src={'/media/imgs/hogs/king-hog.png'}/>
    )
  }
}
