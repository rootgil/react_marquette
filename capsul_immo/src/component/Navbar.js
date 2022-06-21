import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import '../styles/Navbar.css'
import logo  from '../assets/logo.png'

function Navbar() {

    const [click, setClick] = useState(false);
    
    const closeMobileMenu = () => setClick(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav class="navbar">
                <div className='navbar-container'>
                    <div className='navbar-logo'>
                        <Link to="/" onClick={closeMobileMenu}>
                            <img 
                                src={logo}
                                alt="Logo"
                                className='logo'
                            />
                        </Link>
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className="nav-link under" onClick={closeMobileMenu}>
                                VR/ RA
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                                Notre approche
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                                Notre agence
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                                Nos solutions
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar