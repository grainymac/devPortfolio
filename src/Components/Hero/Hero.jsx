import React, { useState, useEffect } from 'react'
import './Hero.sass'

import WorkSpace from './images/workspace.jpg'

const Hero = () => {

    return (
        <>
            <div className='hero' id='hero'>
                <h1 className='animate__fadeInDown hero-title'>IAN MAC</h1>
                <div>
                    <img src={WorkSpace} alt='work space' className='hero-image' />
                </div>
            </div>
        </>
    )
}

export default Hero