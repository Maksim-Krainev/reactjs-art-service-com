import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';

import BgImg01 from "./../../img/1.png";
import BgImg02 from "./../../img/5.png";
import BgImg03 from "./../../img/6.png";
import BgImg04 from "./../../img/7.png";
import BgImg05 from "./../../img/8.png";

const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="header">
            <Carousel
                showArrows={false}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                interval={5000}
                swipeable={false}
                emulateTouch={false}
                stopOnHover={false}
            >
                <div>
                    <img src={BgImg01} alt={t('header.slide1')} />
                </div>
                <div>
                    <img src={BgImg02} alt={t('header.slide2')} />
                </div>
                <div>
                    <img src={BgImg03} alt={t('header.slide3')} />
                </div>
                <div>
                    <img src={BgImg04} alt={t('header.slide4')} />
                </div>
                <div>
                    <img src={BgImg05} alt={t('header.slide5')} />
                </div>
            </Carousel>
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>
                        Art Service 
                    </strong>
                    <br />{t('header.title.line1')}
                </h1>
                <div className="header__text">
                    <p>{t('header.title.line2')}</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
