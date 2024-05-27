import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import NavLogo from "../../img/logo02.png";
import NavPhoneBtn from "./../../img/icons/phone-svgrepo-com.svg";
import NavMenuIcon from "../../img/icons/menu-svgrepo-com.svg";
import './style.css';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';
import closeBtn from './../../img/icons/close-svgrepo-com.svg'

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
                    <div className={`nav-mobile-icons ${menuOpen ? 'nav-mobile-icons--open' : ''}`}>
                        <button className="nav-mobile-icon-button" onClick={closeMenu}>
                            <img src={closeBtn} className='nav-close-pic' width={25} alt={t('closeBtnAlt')}/>
                        </button>
                        <a href="tel:+380507685111" className="nav-mobile-icon-link">
                            <img src={NavPhoneBtn} className='nav-logo-phone'  width={25}  alt={t('phoneBtnAlt')}/>
                        </a>
                    </div>
                    
                    <li className="nav-list__item nav-list__item-phone ">
                                            <NavLink
                                                to="/repair_computer"
                                                className={({ isActive }) =>
                                                    isActive ? activeLink : normalLink
                                                }
                                                onClick={closeMenu} 
                                            >
                                                {t('repair_computers')}
                                            </NavLink>
                                        </li>

                                        <li className="nav-list__item nav-list__item-phone">
                                            <NavLink
                                                to="/repair_phone"
                                                className={({ isActive }) =>
                                                    isActive ? activeLink : normalLink
                                                }
                                                onClick={closeMenu} 
                                            >
                                                {t('repair_phones')}
                                            </NavLink>
                                        </li>

                                        <li className="nav-list__item nav-list__item-phone">
                                            <NavLink
                                                to="/repair_smartphones"
                                                className={({ isActive }) =>
                                                    isActive ? activeLink : normalLink
                                                }
                                                onClick={closeMenu} 
                                            >
                                                {t('repair_smartphones')}
                                            </NavLink>
                                        </li>

                        <li className="nav-list__item pk_phone">
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
