import React from 'react'
import './Work.sass'
import WorkImageSlider from '../../Containers/WorkImageSlider/WorkImageSlider'
import discoverIt from './assets/discoverIt.png'
import dokes from './assets/dokes.png'
import theNeoteric from './assets/theNeoteric.png'
import photoPortfolio from './assets/photographyPortfolio.png'
import theBored from './assets/theBored.png'

const Work = () => {
  const slides = [
    {url: `${discoverIt}`, title: 'DiscoverIt'},
    {url: `${photoPortfolio}`, title: 'Photography Portfolio'},
    {url: `${theNeoteric}`, title: 'The Neoteric'},
    {url: `${dokes}`, title: 'Dokes'},
    {url: `${theBored}`, title: 'The Bored'}
  ]

  return (
    <>
      <div className='work-container' id='work'>
      <h2 className='work-title'>Work</h2>
        <WorkImageSlider slides={slides} />
      </div>
    </>
  )
}

export default Work