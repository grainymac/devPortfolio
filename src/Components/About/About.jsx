import React from 'react'
import './About.sass'
import Profile from './images/profile.jpg'
import 'animate.css'


const About = () => {
  return (
    <>
      <div className='about-page' id='about'>
        <h2 className='animate__pulse about-title'>About</h2>
        <div className='about-container'>
          <img className='profile-photo' src={Profile} alt='profile photo' />
          <div className='about-text-container'>
            <div className='socials'>
              
            </div>
            <span className='line'></span>
            <p>
            Front-end Engineering graduate with fundamental knowledge of software design, development, and testing. Seeking to utilize broad creative background with excellent analytical, technical, and programming skills to
            thrive as a software engine
            </p>
            <a href='/IanMacResume.pdf'>
              <button className='about-button'>RESUME</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
