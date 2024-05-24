import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import NavLogo from "../../img/logo02.png";
import NavPhoneBtn from "./../../img/icons/phone-svgrepo-com.svg";
import NavMenuIcon from "../../img/icons/menu-svgrepo-com.svg";
import './style.css';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';

const Navbar = () => {
    const { t } = useTranslation();
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
                        <img src={NavLogo} className='nav-logo' alt={t('logo_alt')} />
                    </NavLink>

                    <BtnDarkMode />

                    <div className="menu-toggle" onClick={toggleMenu}>
                        <img src={NavMenuIcon} className='nav-menu-pic' alt={t('menu_button_alt')} width={25}/>
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
                                {t('home')}
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
                                {t('about')}
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <a href="tel:+380507685111" style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={NavPhoneBtn} className='nav-logo-phone' alt={t('phone_alt')} width={15} style={{ marginRight: '5px' }}/> {t('phone_number')}
                            </a>
                        </li>
                    </ul>
                    <LanguageSwitcher />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
