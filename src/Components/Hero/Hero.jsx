import React, { useState, useEffect } from 'react'
import './Hero.sass'
import AnimatedLetters from '../../Containers/AnimatedLetters/AnimatedLetters'
import Ian from './images/ian1.jpg'

const Hero = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = [' ', 'I', 'a', 'n', ',']
    const jobArray = ['a', 'n', 'd', ' ', 'I', ' ', 'a', 'm', ' ', 'a', ' ', 's', 'o', 'f', 't', 'w', 'a', 'r', 'e', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r!']

    useEffect(() => {
        return setLetterClass('text-animate-hover')
    }, [])

    return (
        <>
            <div className='hero' id='hero'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>e</span>
                    <span className={`${letterClass} _12`}>y</span>
                    <span className={`${letterClass} _13`}></span>
                    <span className={`${letterClass} _14`}>w</span>
                    <span className={`${letterClass} _14`}>h</span>
                    <span className={`${letterClass} _14`}>a</span>
                    <span className={`${letterClass} _14`}>t</span>
                    <span className={`${letterClass} _14`}>'s</span>
                    <span className={`${letterClass} _14`}></span>
                    <span className={`${letterClass} _14`}>u</span>
                    <span className={`${letterClass} _14`}>p?!</span>
                    <br />
                    <span className={`${letterClass} _13`}>M</span>
                    <span className={`${letterClass} _14`}>y</span>
                    <span className={`${letterClass} _14`}></span>
                    <span className={`${letterClass} _14`}>n</span>
                    <span className={`${letterClass} _14`}>a</span>
                    <span className={`${letterClass} _14`}>m</span>
                    <span className={`${letterClass} _14`}>e</span>
                    <span className={`${letterClass} _14`}></span>
                    <span className={`${letterClass} _13`}>i</span>
                    <span className={`${letterClass} _14`}>s</span>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
            </div>
            <h3 className='hero-text'>Front-end Developer | Software Developer | Photographer | Musician | Producer | Graphic Designer | Tech-enthusiast | United States Air Force Veteran</h3>
        </>
    )
}

export default Hero