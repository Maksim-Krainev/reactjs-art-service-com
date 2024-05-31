import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';

import BgImg01 from "./../../img/hero_bg_01.jpg";
import BgImg02 from "./../../img/hero_bg_02.jpg";
import BgImg03 from "./../../img/hero_bg_03.jpg";

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
