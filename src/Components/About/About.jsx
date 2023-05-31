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
            <span className='line'></span>
            <p>
              Hello there! How's it going? I'm a front-end developer who is passionate about crafting stunning and functional user interfaces using React.js and SCSS. As a creative individual with a wide range of skills and interests, I have the ability to explore and express my ideas through various mediums, each of which informs and enhances the others. With a background in graphic design, I bring a unique perspective to my work and love discovering innovative ways to merge design with coding projects. I thrive on creativity, constantly seeking out-of-the-box thinking and pushing the boundaries of my abilities. My ultimate aspiration is to be part of a team that develops solutions and applications that make a positive impact on people's lives. Recently, I completed my studies at the Turing School of Software & Design, a coding bootcamp where I acquired new skills through remote learning. Despite the challenges of the fast-paced environment, I found the experience to be immensely rewarding, thanks to its strong community-based learning approach. During my time at Turing, I delved into technologies such as Javascript, React.js, GSAP, and Material UI for the first time. Since graduating, I've been faced with the task of finding a job in the tech field, so I've been keeping myself busy by developing personal applications and websites. Despite this hurdle, I remain ambitious and committed to continuous learning, determined to forge ahead in my career as a software developer.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
