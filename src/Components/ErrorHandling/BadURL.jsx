import React from 'react'
import { Link } from 'react-router-dom'

const BadURL = () => {
    return (
        <div className='badURL-container'>
            <h2></h2>
            <Link to='/'><button className='home-button'>HOME</button></Link>
        </div>
    )
}

export default BadURL