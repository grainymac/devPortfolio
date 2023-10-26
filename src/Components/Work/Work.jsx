import React from 'react'
import './Work.sass'
import WorkImageSlider from '../../Containers/WorkImageSlider/WorkImageSlider'
import discoverIt from './assets/discoverIt.png'
import dokes from './assets/dokes.png'
import theNeoteric from './assets/theNeoteric.png'
import photoPortfolio from './assets/photographyPortfolio.png'
import theBored from './assets/theBored.png'
import rancid from './assets/rancid.png'
import darkWeather from './assets/darkWeather.png'
import instantMania from './assets/instantmania.jpg'
import 'animate.css'

const Work = () => {
  const slides = [
    {url: `${instantMania}`, title: 'InstantMania', github: 'https://instantmania.vercel.app/'},
    {url: `${darkWeather}`, title: 'darkWeather', github: 'https://dark-weather-two.vercel.app/'},
    {url: `${discoverIt}`, title: 'DiscoverIt', github: 'https://discoverit2208.vercel.app/'},
    {url: `${photoPortfolio}`, title: 'Photography Portfolio', github: 'https://imphotos.vercel.app/'},
    {url: `${theNeoteric}`, title: 'The Neoteric', github: 'https://the-neoteric.vercel.app/'},
    {url: `${dokes}`, title: 'Dokes', github: 'https://dokes.surge.sh/'},
    {url: `${rancid}`, title: 'Rancid Tomatillos', github: 'https://rancid-tomatillos-wheat.vercel.app/'},
    {url: `${theBored}`, title: 'The Bored', github: 'https://the-bored.vercel.app/'}
  ]

  return (
    <div className='work' id='work'>
      <h2 className='animate__pulse work-title'>Work</h2>
      <div className='work-container'>
        <WorkImageSlider slides={slides} />
      </div>
    </div>
  )
}

export default Work