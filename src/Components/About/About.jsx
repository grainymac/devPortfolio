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
                <li><a target='_blank' href='https://www.linkedin.com/in/ian-mcintosh-texas/'><FaLinkedinIn /></a></li>
                <li><a target='_blank' href='https://twitter.com/ianmac__'><FaTwitter /></a></li>
                <li><a target='_blank' href='https://github.com/grainymac'><FaGithub /></a></li>
                <li><a target='_blank' href='https://www.facebook.com/profile.php?id=100093465405779'><FaFacebook /></a></li>
                {/* <li><a target='_blank' href='https://www.behance.net/ianmac__'><FaBehance /></a></li> */}
              </ul>
            </div>
            <span className='line'></span>
            <p>
            I am a Front-end Developer with fundamental knowledge of software design, development, and testing.  Seeking to utilize a broad creative background with excellent analytical, technical, and programming skills to thrive as a developer. Dedicated to delivering innovative solutions and contributing to the success of cutting-edge projects.
            </p>
            <span className='line'></span>
            <p>I run a freelance development/design service called <em>DarkDad</em>. <em>DarkDad</em> offers clients ux/ui designs, web management and support options, custom web application solutions, and custom graphic designs ranging from social media banners, flyers, and website assets</p>
            <a href='/IanMcIntoshResume(FE).pdf' target='_blank'>
              <button className='about-button'>RESUME</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
