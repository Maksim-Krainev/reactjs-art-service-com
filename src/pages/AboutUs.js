import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import HeaderRepairComputer from './../components/heroAboutUs/HeroRepairComputer';

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('about_us_title')}</title>
                <meta name="description" content={t('about_us_description')} />
            </Helmet>
            <HeaderRepairComputer />
           <ul className='about-us__list'>
                <li className='about-us__item about-us__left '>
                <iframe 
                src="https://www.youtube.com/embed/q-iY824to_0?si=mSWMo4gyqM6vqi35" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
                <p>
                {t('about-us.body_1')}
                </p>
                </li>
                <li className='about-us__item'>

                <iframe  src="https://www.youtube.com/embed/_NoTAk4nY_8?si=qQ2y8oafE7UJ0kAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p>
                {t('about-us.body_2')}
                </p>
                </li>
                <li className='about-us__item about-us__left'>
                <iframe  src="https://www.youtube.com/embed/f3DGiF2ZkhQ?si=bJVEclEr0JEEwrJ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p>
                {t('about-us.body_3')}
                </p>
                </li>
           </ul>
        </>
    );
}

export default AboutUs;
