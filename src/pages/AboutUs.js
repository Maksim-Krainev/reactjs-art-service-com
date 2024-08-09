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
            <div className='container'>
                <div className='about-text'>
                    <p>{t('about_us_text.p1', { company: 'ArtService' })}</p>
                    <p>{t('about_us_text.p2')}</p>
                    <p>{t('about_us_text.p3')}</p>
                    <p>{t('about_us_text.p4')}</p>
                    <p>{t('about_us_text.p5')}</p>
                    <p>{t('about_us_text.p6')}</p>
                </div>
                <div className='about-container'>
                    <div className='about-video'>
                        <iframe 
                            src="https://www.youtube.com/embed/q-iY824to_0?si=mSWMo4gyqM6vqi35" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            className='about-iframe about-iframe-left'
                        ></iframe>
                        <iframe 
                            className='about-iframe about-iframe-right' 
                            src="https://www.youtube.com/embed/_NoTAk4nY_8?si=qQ2y8oafE7UJ0kAs" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        ></iframe>
                        <iframe 
                            className='about-iframe about-iframe-left' 
                            src="https://www.youtube.com/embed/f3DGiF2ZkhQ?si=bJVEclEr0JEEwrJ8" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;
