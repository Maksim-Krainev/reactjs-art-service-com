import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import "./style.css";
import footerLogo from "./../../img/logo02.png";
import visaCard from "./../../img/icons/visa-classic-svgrepo-com.svg";
import masterCard from "./../../img/icons/mastercard-full-svgrepo-com.svg";
import logoInsta from "./../../img/icons/instagram-svgrepo-com.svg";
import logoGmail from "./../../img/icons/gmail-svgrepo-com.svg";
import logoTg from "./../../img/icons/telegram-plane-svgrepo-com.svg"

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item social__item-logo ">
                            <img src={footerLogo} alt={t('footer.logo_alt')} width={200} />
                            <div className="card">
                                <img src={visaCard} alt={t('footer.visa_alt')} width={50} />
                                <img src={masterCard} alt={t('footer.mastercard_alt')} width={50} />
                            </div>
                        </li>
                        <li className="social__item cont">
                            <h2 className="title-2">{t('footer.working_hours')}</h2>
                            <p>{t('footer.monday_friday')}: 09:00–19:00</p>
                            <p>{t('footer.saturday')}: 12:00–15:00</p>
                            <p>{t('footer.sunday')}: {t('footer.closed')}</p>
                        </li>
                        <li className="social__item">
                            <ul className='footer__navigation'>
                            <li className="footer__mavigation-item ">
                                            <NavLink
                                               to="/about"
                                                className='footer__mavigation-link'>
                                                {t('footer.about')}
                                            </NavLink>
                                        </li>
                            <li className="footer__mavigation-item ">
                                            <NavLink
                                               to="/repair_computer"
                                                className='footer__mavigation-link'>
                                                {t('repair_computers')}
                                            </NavLink>
                                        </li>
                                        <li className="footer__mavigation-item ">
                                            <NavLink
                                               to="/repair_phone"
                                                className='footer__mavigation-link'>
                                                 {t('repair_phones')}
                                            </NavLink>
                                        </li>
                                        <li className="footer__mavigation-item ">
                                            <NavLink
                                               to="/repair_smartphones"
                                                className='footer__mavigation-link'>
                                                {t('repair_smartphones')}
                                            </NavLink>
                                        </li>
                            </ul>
                        </li>
                        <li className="social__item">
                            <h2 className="title-2">{t('footer.contacts')}</h2>
                            <p>{t('footer.phone')}: <a href="tel:+380507685111">+380 (50) 768 51 11</a></p>
                            <p>{t('footer.email')}: <a href="mailto:ArtService1888@gmail.com">ArtService1888@gmail.com</a></p>
                            <p>{t('footer.address')}: <a href="https://maps.app.goo.gl/TCLfVMq9PY1ypnJa7">Берестейський проспект, 99/1</a></p>
                        </li>
                    </ul>
                    <div className='phone__footer-info'>
                    <h2 className="title-2">{t('footer.contacts')}</h2>
                            <p>{t('footer.phone')}: <a href="tel:+380507685111">+380 (50) 768 51 11</a></p>
                            <p>{t('footer.email')}: <a href="mailto:ArtService1888@gmail.com">ArtService1888@gmail.com</a></p>
                            <p>{t('footer.address')}: <a href="https://maps.app.goo.gl/TCLfVMq9PY1ypnJa7">Берестейський проспект, 99/1</a></p>
                            <h2 className="title-2">{t('footer.working_hours')}</h2>
                            <p>{t('footer.monday_friday')}: 09:00–19:00</p>
                            <p>{t('footer.saturday')}: 12:00–15:00</p>
                            <p>{t('footer.sunday')}: {t('footer.closed')}</p>
                    </div>
                    <ul className='social-list'>
                                <li className='social-list__item'>
                                    <a className='social-list__link' href='https://www.instagram.com/art_service111/'>
                                        <img src={logoInsta} width={25} alt={t('footer.contacts')} />
                                    </a>
                                </li>
                                <li className='social-list__item'>
                                    <a className='social-list__link' href='"mailto:ArtService1888@gmail.com'>
                                        <img src={logoGmail} width={25} alt={t('footer.contacts')} />
                                    </a>
                                </li>
                                <li className='social-list__item'>
                                    <a className='social-list__link' href='https://t.me/ArtService111'>
                                        <img src={logoTg} width={25} alt={t('footer.contacts')} />
                                    </a>
                                </li>
                            </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
