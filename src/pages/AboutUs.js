import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('about_us_title')}</title>
                <meta name="description" content={t('about_us_description')} />
            </Helmet>
            <h1>{t('about_us')}</h1>
        </>
    );
}

export default AboutUs;
