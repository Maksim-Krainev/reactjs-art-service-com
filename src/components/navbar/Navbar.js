import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import NavLogo from "../../img/logo02.png";
import NavPhoneBtn from "./../../img/icons/phone-svgrepo-com.svg";
import NavMenuIcon from "../../img/icons/menu-svgrepo-com.svg";
import './style.css';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';
import closeBtn from './../../img/icons/close-svgrepo-com.svg'

import logoInsta from "./../../img/icons/instagram-svgrepo-com.svg";
import logoGmail from "./../../img/icons/gmail-svgrepo-com.svg";
import logoTg from "./../../img/icons/telegram-plane-svgrepo-com.svg"

const Navbar = () => {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); 
    };

    const closeMenu = () => {
        setMenuOpen(false); 
    };

    const handleLogoClick = () => {
        if (location.pathname === '/') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      };

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo" onClick={handleLogoClick}>
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
                        <NavLink to="/" className="logo">
                        <img src={NavLogo} className='nav-logo' alt={t('logo_alt')} />
                    </NavLink>
                    </div>  
                    <li className=" nav-list__item-phone phone-menu nav-phone-top">
                                           <NavLink
                                                to="/"
                                                className={({ isActive }) =>
                                                    isActive ? activeLink : normalLink
                                                }
                                                onClick={closeMenu} 
                                            >
                                                {t('footer.home')}
                                            </NavLink>
                                        </li>                    
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
                                        <li className=" nav-list__item-phone phone-menu">
                                            <NavLink
                                                to="/repair_computer"
                                                className={({ isActive }) =>
                                                    isActive ? activeLink : normalLink
                                                }
                                                onClick={closeMenu} 
                                            >
                                                {t('project.repair_airmak')}
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
                                        <li className=" nav-list__item-phone phone-menu">
                                            <NavLink
                                                to="/repair_phone"
                                                className={({ isActive }) =>
                                                    isActive ? activeLink : normalLink
                                                }
                                                onClick={closeMenu} 
                                            >
                                                {t('project.repair_mac')}
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
                                        <li className=" nav-list__item-phone phone-menu">
                                            <NavLink
                                                to="/repair_smartphones"
                                                className={({ isActive }) =>
                                                    isActive ? activeLink : normalLink
                                                }
                                                onClick={closeMenu} 
                                            >
                                                {t('project.repair_iphone')}
                                            </NavLink>
                                        </li>
                                        <li className=" nav-list__item-phone phone-menu">
                                            <NavLink
                                                to="/repair_smartphones"
                                                className={({ isActive }) =>
                                                    isActive ? activeLink : normalLink
                                                }
                                                onClick={closeMenu} 
                                            >
                                                {t('project.repair_smart-whach')}
                                            </NavLink>
                                        </li>
                                        <li className=" nav-list__item-phone phone-menu">
                                            <NavLink
                                                to="/about"
                                                className={({ isActive }) =>
                                                    isActive ? activeLink : normalLink
                                                }
                                                onClick={closeMenu} 
                                            >
                                                {t('footer.about')}
                                            </NavLink>
                                        </li>
                                        <li className=" nav-list__item-phone phone-menu">
                                        <a href="tel:+380507685111" style={{ display: 'flex', alignItems: 'center', color: '#fff', marginTop: '50px', fontSize: '20px'}}>
                                <img src={NavPhoneBtn} className='nav-logo-phone' alt={t('phone_alt')} width={25} style={{ marginRight: '5px' }}/> {t('phone_number')}
                            </a>
                                        </li>
                                        <li className=" nav-list__item-phone phone-menu">
                                        <ul className='social-list'>
                                <li className='social-list__item'>
                                    <a className='social-list__link' href='https://www.instagram.com/art_service111/'>
                                        <img src={logoInsta} width={25} alt={t('footer.contacts')} />
                                    </a>
                                </li>
                                <li className='social-list__item'>
                                    <a className='social-list__link' href='mailto:ArtService1888@gmail.com'>
                                        <img src={logoGmail} width={25} alt={t('footer.contacts')} />
                                    </a>
                                </li>
                                <li className='social-list__item'>
                                    <a className='social-list__link' href='https://t.me/ArtService111'>
                                        <img src={logoTg} width={25} alt={t('footer.contacts')} />
                                    </a>
                                </li>
                            </ul>
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
