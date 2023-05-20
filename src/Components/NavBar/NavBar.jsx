import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './NavBar.sass'
import Logo from '../../assets/ianmcintosh - colour.png'

const NavBar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
        <div className='navBar-container'>
            <nav className='navBar'>
                <Link href='/' className='logo'>
                    <img src={Logo} alt='logo' />
                </Link>
                <div>

                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' spy={true} smooth={true} offset={-100} duration={500} onclick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='about' spy={true} smooth={true} offset={-100} duration={500} onclick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='skills' spy={true} smooth={true} offset={-100} duration={500} onclick={closeMenu}>Skills</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='work' spy={true} smooth={true} offset={-100} duration={500} onclick={closeMenu}>Work</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} onclick={closeMenu}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar