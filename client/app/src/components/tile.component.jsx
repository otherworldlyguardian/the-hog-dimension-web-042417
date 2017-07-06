import React, { Component } from 'react'
import ColourFadeImg from './colourFadeImg.component.jsx'

const Tile = ({tileIdx, tileData}) => (
  <div id={`tile-${tileIdx}-wrapper`} className="tile-wrapper" >
    <div id={`tile-${tileIdx}`} className="tile-content" style={tileData.style}>
      <ColourFadeImg colourImg={tileData.colourImg} bwImg={tileData.bwImg} />
    </div>
  </div>
)

export default Tile
