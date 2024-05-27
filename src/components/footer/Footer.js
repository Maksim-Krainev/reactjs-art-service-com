import React from 'react';
import { useTranslation } from 'react-i18next';
import "./style.css";
import footerLogo from "./../../img/logo02.png";
import visaCard from "./../../img/icons/visa-classic-svgrepo-com.svg";
import masterCard from "./../../img/icons/mastercard-full-svgrepo-com.svg";

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
                        <li className="social__item">
                            <h2 className="title-2">{t('footer.working_hours')}</h2>
                            <p>{t('footer.monday_friday')}: <span>09:00–19:00</span></p>
                            <p>{t('footer.saturday')}: <span>12:00–15:00</span></p>
                            <p>{t('footer.sunday')}: <span>{t('footer.closed')}</span></p>
                        </li>
                        <li className="social__item">
                            <h2 className="title-2">{t('footer.contacts')}</h2>
                            <p>{t('footer.phone')}: <a href="tel:+380507685111">+380 (50) 768 51 11</a></p>
                            <p>{t('footer.instagram')}: <a href="https://www.instagram.com/art_service111">art_service111</a></p>
                            <p>{t('footer.email')}: <a href="mailto:ArtService1888@gmail.com">ArtService1888@gmail.com</a></p>
                            <p>{t('footer.address')}: <a href="https://maps.app.goo.gl/TCLfVMq9PY1ypnJa7">Берестейський проспект, 99/1</a></p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
