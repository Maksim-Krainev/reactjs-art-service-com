import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import NavLogo from "../../img/logo.png"
import NavPhoneBtn from "./../../img/icons/phone-svgrepo-com.svg"
import NavMenuIcon from "../../img/icons/menu-svgrepo-com.svg"
import './style.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); 

    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); 
    };

    const closeMenu = () => {
        setMenuOpen(false); 
    };

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <img src={NavLogo} className='nav-logo' alt='Лого' />
                    </NavLink>

                    <BtnDarkMode />

                    <div className="menu-toggle" onClick={toggleMenu}>
						<img src={NavMenuIcon} className='nav-menu-pic' alt='Меню кнопка' width={25}/>
					</div>

                    <ul className={`nav-list ${menuOpen ? 'nav-list--open' : ''}`}>
                        <li className="nav-list__item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                                onClick={closeMenu} 
                            >
                                Головна
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                                onClick={closeMenu} 
                            >
                                Про нас
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <a href="tel:+380507685111" style={{ display: 'flex', alignItems: 'center' }}> <img src={NavPhoneBtn} className='nav-logo-phone' alt='Лого' width={15} style={{ marginRight: '5px' }}/> +380507685111</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
