import React, { Component } from 'react'
import { render } from 'react-dom'
import CubeMover from './cubeMover.component.jsx'
import AnimatorButton from './animatorButton.component.jsx'
import destinationMapper from './../helpers/destinationMapper.js'
import { idxToSide } from '../helpers/sideDataMapper.js'

export default class Side extends Component {

  render() {
    if (this.props.active && !this.props.isFlat) {
      var cubeMovers = ["rechts", "links", "unten", "oben"].map((destinationName, idx) => {
        return <CubeMover key={idx} destinationName={destinationName} onClick={() => this.props.rotateCube(destinationMapper[this.props.sideIdx][destinationName])}/>
      })
    }
    var animator = (this.props.animator) ? <AnimatorButton onClick={this.props.animator}/> : null
    const sideName = idxToSide[this.props.sideIdx]
    const data = this.props.sideData
    const {faceCSS, sideCSS} = this.props.sideData.style
    return (
      <div id={`${sideName}-side`} className="side" style={sideCSS}>
        <div id={`${sideName}-face`} className="face" style={faceCSS}>
          {data.title ? <h1>{data.title}</h1> : null}
          {data.linkUrl ? <a href={data.linkUrl} target="_blank">{data.linkTitle}</a> : null}
          {data.longScrip ? <p>{data.longScrip}</p> : null}
          {data.shortScrip ? <h3>{data.shortScrip}</h3> : null}
          {animator}
          {cubeMovers}
        </div>
      </div>
    )
  }
}
