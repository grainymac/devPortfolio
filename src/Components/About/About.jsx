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
          <article className='about-card'>
            <div className='thumb'></div>
            <div className='info'>
              <h2 className='about-name-title'>Ian McIntosh <span></span></h2>
              <h3 className='about-job-title'>Frontend Developer/Designer</h3>
              <h4 className='about-sub-title'>Photographer | Musician | Artist</h4>
            </div>
          </article>
          {/* <img className='profile-photo' src={Profile} alt='profile photo' /> */}
          <div className='about-text-container'>
            <span className='line'></span>
            <p>
            I'm a front-end developer obsessed with creating beautiful, functional user interfaces with React.js and SCSS. I'm a creative individual with a wide range of skills and interests, so I'm able to express myself through several mediums, each of which informs and enhances the others. My background in graphic design gives me a unique perspective on my work, and I love finding innovative ways to merge design with coding. Being creative keeps me on my toes, pushing my capabilities and thinking outside the box. Ultimately, I want to be part of a team that develops solutions and applications that make a positive impact on people. My ambition and commitment to continuous learning will drive me forward in my career as a software developer despite this hurdle.
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
