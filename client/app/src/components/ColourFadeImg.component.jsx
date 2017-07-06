import React, { Component } from 'react'

const ColourFadeImg = ({colourImg, bwImg}) => (
      <div className="on-hover-bundle-wrapper">
        <img className="fadeable overlapping-img colour-img" src={colourImg} />
        <img className="fadeable overlapping-img bw-img" src={bwImg} />
      </div>
)

export default ColourFadeImg
