import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Advantages() {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 100,
        });
    }, []);

    return (
        <div className="advantages-grid">
            <div className="advantage advantage1" data-aos="fade-right" data-aos-delay="30">
                <i className="ti-bar-chart"></i>
                <h4>{t('advantages.experienced_workers.title')}</h4>
                <p>{t('advantages.experienced_workers.description')}</p>
            </div>
            <div className="advantage advantage2" data-aos="fade-up" data-aos-delay="20">
                <i className="ti-light-bulb"></i>
                <h4>{t('advantages.competitive_prices.title')}</h4>
                <p>{t('advantages.competitive_prices.description')}</p>
            </div>
            <div className="advantage advantage3" data-aos="fade-left" data-aos-delay="30">
                <i className="ti-money"></i>
                <h4>{t('advantages.quality_parts.title')}</h4>
                <p>{t('advantages.quality_parts.description')}</p>
            </div>
        </div>
    );
}

export default Advantages;
