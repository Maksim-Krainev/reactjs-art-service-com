import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import './style.css';

import BgImg01 from "./../../img/mobale-page/mob_1.jpg";
import BgImg02 from "./../../img/mobale-page/mob_2.jpg";
import BgImg03 from "./../../img/mobale-page/mob_3.jpg";
import BgImg04 from "./../../img/mobale-page/mob_4.jpg";
import BgImg05 from "./../../img/mobale-page/mob_5.jpg";

const HeaderRepairMobile = () => {
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
                    <img src={BgImg04} alt={t('header.slide3')} />
                </div>
                <div>
                    <img src={BgImg05} alt={t('header.slide3')} />
                </div>
            </Carousel>
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>
                        Art Service
                    </strong>
                    <br />{t('hero-repair-computer.title')}
                </h1>
                <div className="header__text">
                    <p>{t('hero-repair-computer.header-text')}</p>
                </div>
            </div>
        </header>
    );
}

export default HeaderRepairMobile;
