import React from 'react'
import './About.sass'
import Profile from './images/profile.png'
import 'animate.css'
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter, FaReddit } from "react-icons/fa"
import { library } from '@fortawesome/fontawesome-svg-core'
import threads from './images/threads.svg'
import Resume from '../../../public/Resume.pdf'


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
                <li><a target='_blank' href='https://github.com/grainymac'><FaGithub /></a></li>
                <li><a target='_blank' href='https://www.instagram.com/__ianmac__/'><FaInstagram /></a></li>
                <li><a href='https://www.threads.net/@__ianmac__' target='_blank'><img className='about-icon' src={threads} /></a></li>
                <li><a target='_blank' href='https://twitter.com/ianmac__'><FaTwitter /></a></li>
                <li><a target='_blank' href='https://www.reddit.com/user/ianmac__'><FaReddit /></a></li>
              </ul>
            </div>
            <span className='line'></span>
            <p>
            I am a Front-end Developer with fundamental knowledge of software design, development, and testing.  Seeking to utilize a broad creative background with excellent analytical, technical, and programming skills to thrive as a developer. Dedicated to delivering innovative solutions and contributing to the success of cutting-edge projects.
            </p>
            <span className='line'></span>
            <p>I run a freelance development/design service called <em>DarkDad</em>. <em>DarkDad</em> offers clients ux/ui designs, web management and support options, custom web application solutions, and custom graphic designs ranging from social media banners, flyers, and website assets.</p>
            <span className='line'></span>
            <a href='https://www.ianmac.live/' target='_blank'>[My Photography Portfolio]</a>
            <a href={Resume} target='_blank'>[My Resume]</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
