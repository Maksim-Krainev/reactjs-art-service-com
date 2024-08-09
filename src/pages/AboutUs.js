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
                        <p>Наш якісний ремонт телефонів, планшетів та комп'ютерів забезпечить надійність та довговічність у кожному відновленому гаджеті. Оберіть майстрів для Ваших гаджетів з <strong>ArtService</strong>.</p>
                        <p> Наші майстри мають десятирічний досвід у сфері обслуговування електроніки.</p>
                        <p>✓ Ми вирішуємо найскладніші технічні завдання з впевненістю та точністю.</p>
                        <p>✓ Ми використовуємо лише оригінальні деталі, щоб ваш пристрій працював як новий.</p>
                        <p>✓ Ми знаємо, що кожен клієнт та кожен пристрій унікальні, це дозволяє нам впроваджувати персоналізовані рішення, щоб максимально відповідати вашим очікуванням.</p>
                        <p> Наша місія – не просто відновити ваш гаджет, а стати надійним партнером для подальшої співпраці. Ми знаємо, кожен гаджет у вашій родині потребує технічної підтримки, а ви – комфортних умов співпраці.</p>
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
