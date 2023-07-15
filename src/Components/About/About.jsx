import React from 'react'
import './About.sass'
import Profile from './images/profile.jpg'
import 'animate.css'
import { FaTwitter, FaGithub, FaFacebook, FaBehance, FaLinkedinIn } from "react-icons/fa"


const About = () => {
  return (
    <>
      <div className='about-page' id='about'>
        <h2 className='animate__pulse about-title'>About</h2>
        <div className='about-container'>
          <img className='profile-photo' src={Profile} alt='profile photo' />
          <div className='about-text-container'>
            <div className='socials'>
              <ul className='social-links'>
                <li><a href='https://www.linkedin.com/in/ian-mcintosh-texas/'><FaLinkedinIn /></a></li>
                <li><a href='https://twitter.com/ianmac__'><FaTwitter /></a></li>
                <li><a href='https://github.com/grainymac'><FaGithub /></a></li>
                <li><a href='https://www.facebook.com/profile.php?id=100093465405779'><FaFacebook /></a></li>
                <li><a href='https://www.behance.net/ianmac__'><FaBehance /></a></li>
              </ul>
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
