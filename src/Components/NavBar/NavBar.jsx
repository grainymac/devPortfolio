import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './NavBar.sass'
import Logo from '../../assets/ianmcintosh - colour.png'
import 'animate.css'

const NavBar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
        <div className='navBar-container'>
            <nav className='navBar'>
                <Link to='/' className='logo'>
                    <img className='image-logo' src={Logo} alt='logo' />
                </Link>
                <div>

                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item animate__fadeIn'>
                        <Link to='hero' spy={true} smooth={true} offset={-100} duration={900} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item animate__fadeIn'>
                        <Link to='about' spy={true} smooth={true} offset={-100} duration={900} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item animate__fadeIn'>
                        <Link to='skills' spy={true} smooth={true} offset={-100} duration={900} onClick={closeMenu}>Skills</Link>
                    </li>
                    <li className='nav-item animate__fadeIn'>
                        <Link to='work' spy={true} smooth={true} offset={-100} duration={900} onClick={closeMenu}>Work</Link>
                    </li>
                    <li className='nav-item animate__fadeIn'>
                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={900} onClick={closeMenu}>Contact</Link>
                    </li>
                    {/* <li className='nav-item animate__fadeIn'>
                        <a href='https://www.ianmac.live/blog' target='_blank'>Blog</a>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar