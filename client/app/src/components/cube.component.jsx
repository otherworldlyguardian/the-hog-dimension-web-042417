import React, { Component } from 'react'
import { render } from 'react-dom'
import Side from './side.component.jsx'
import { getSideData, idxToSide } from "../helpers/sideDataMapper.js"
import destinationMapper from "../helpers/destinationMapper.js"
import { setCube, rotateCube, flattenCube, foldCube, locked } from "../helpers/cubeAnimator.js"

export default class Cube extends Component {
  constructor() {
    super()
    this.state = {
      activeSideIdx: 0,
      isFlat: false,
    }
    //TODO use babel plugin -- replace these w/ lambdas
    this.cubeFolder = this.cubeFolder.bind(this)
    this.rotateCube = this.rotateCube.bind(this)
    this.handleKeyDownCodeGolf = this.handleKeyDownCodeGolf.bind(this)
    this.handleKeyDownBoringCompromise = this.handleKeyDownBoringCompromise.bind(this)
    this.handleKeyDownClassicStahp = this.handleKeyDownClassicStahp.bind(this)
    this.$self = null
    this.domSelf = null
  }

  //todo: would be better to associate the controller with the object than pass all the references
  componentDidMount() {
    this.$self = $(`#${this.props.cubeName}`)
    this.domSelf = document.getElementById(this.props.cubeName)
    setCube(this.$self, this.domSelf)
    document.addEventListener("keydown", this.handleKeyDownCodeGolf, false) // why is this not attached to a component?
  }

  rotateCube(destinationIdx) {
    if (!this.state.isFlat && rotateCube(this.state.activeSideIdx, destinationIdx))
      this.setState({ activeSideIdx: destinationIdx[0]/1 || destinationIdx })
  }

  handleKeyDownCodeGolf(e) {
    if (!this.state.isFlat)
      if (e = {87: 'oben', 65: 'links', 83: 'unten', 68: 'rechts'}[e.keyCode])
        this.rotateCube(destinationMapper[this.state.activeSideIdx][e])
  }

  handleKeyDownBoringCompromise(e) {
    const keyRouter = {87: 'oben',
                       65: 'links',
                       83: 'unten',
                       68: 'rechts'}
    if (this.state.isFlat && keyRouter.hasOwnProperty(e.keyCode))
        this.rotateCube(destinationMapper[this.state.activeSideIdx][keyRouter[e.keyCode]])
  }

  handleKeyDownClassicStahp(e) {
    if (this.state.isFlat) {
      if (e.keyCode === 87 || e.key === "w") {
        this.rotateCube(destinationMapper[this.state.activeSideIdx]['oben'])
      } else if (e.keyCode === 65 || e.key === "a") {
        this.rotateCube(destinationMapper[this.state.activeSideIdx]['links'])
      } else if (e.keyCode === 83 || e.key === "s") {
        this.rotateCube(destinationMapper[this.state.activeSideIdx]['unten'])
      } else if (e.keyCode === 68 || e.key === "d") {
        this.rotateCube(destinationMapper[this.state.activeSideIdx]['rechts'])
      }
    }
  }

  cubeFolder() {
    if (!this.state.isFlat && !locked) {
      flattenCube()
      this.setState({ isFlat: true })
    } else if (this.state.isFlat && !locked) {
      foldCube()
      this.setState({ isFlat: false })
    }
  }

  render() {
    const sides = [...Array(6)].map((_, sideIdx) => {
      const sideData = getSideData(sideIdx)
      const active = this.state.activeSideIdx === sideIdx
      // TODO no need for this, just pass undefined if undefined...
      // Can spread operator this out
      if (sideData.animator === 'fold')
        return <Side key={idxToSide[sideIdx]} sideIdx={sideIdx} active={active} sideData={sideData} rotateCube={this.rotateCube} animator={this.cubeFolder} isFlat={this.state.isFlat}/>
      return <Side key={idxToSide[sideIdx]} sideIdx={sideIdx} active={active} sideData={sideData} rotateCube={this.rotateCube} />
    })

    return (
      <div className="cube-container">
        <div className="oscillation-wrapper oscillate">
          <div className="cube" id={this.props.cubeName}>
            {sides}
          </div>
        </div>
      </div>
    )
  }
}
