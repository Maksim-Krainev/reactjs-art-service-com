import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import HeaderRepairComputer from './../components/heroRepairComputer/HeroRepairComputer';
import ServicesTable from '../components/serviceTable/serviceTable';

import imgSamsung from "./../img/logo-phone/samsungLogo.png";
import imgApl from "./../img/logo-phone/aplleLogo.png";
import imgAcer from "./../img/logo-phone/acerLogo.png";
import imgHtc from "./../img/logo-phone/htcLogo.png";
import imgAsus from "./../img/logo-phone/asusLogo.png";
import imgLenovo from "./../img/logo-phone/lenovoLogo.png";
import imgLg from "./../img/logo-phone/lgLogo.png";
import imgDell from "./../img/logo-phone/dellLogo.png";
import imgMicrosoft from "./../img/png/microsoft-logo-svgrepo-com (1).svg";



import Carousel from '../components/carusel/Carusel';

function RepairImac() {
  const { t } = useTranslation();
  const items = [
    { src: imgApl, alt: 'apple' },
    { src: imgSamsung, alt: 'samsung' },
    { src: imgAcer, alt: 'acer' },
    { src: imgHtc, alt: 'htc' },
    { src: imgAsus, alt: 'asus' },
    { src: imgLenovo, alt: 'lenovo' },    
    { src: imgLg, alt: 'lg logo' },
    { src: imgDell, alt: 'dell logo' },
    { src: imgMicrosoft, alt: 'mycrosoft logo' },
    { src: imgApl, alt: 'apple' },
    { src: imgSamsung, alt: 'samsung' },
    { src: imgAcer, alt: 'acer' },
    { src: imgHtc, alt: 'htc' },
    { src: imgAsus, alt: 'asus' },
    { src: imgLenovo, alt: 'lenovo' },    
    { src: imgLg, alt: 'lg logo' },
    { src: imgDell, alt: 'dell logo' },
    { src: imgMicrosoft, alt: 'mycrosoft logo' },
    { src: imgApl, alt: 'apple' },
    { src: imgSamsung, alt: 'samsung' },
    { src: imgAcer, alt: 'acer' },
    { src: imgHtc, alt: 'htc' },
    { src: imgAsus, alt: 'asus' },
    { src: imgLenovo, alt: 'lenovo' },    
    { src: imgLg, alt: 'lg logo' },
    { src: imgDell, alt: 'dell logo' },
    { src: imgMicrosoft, alt: 'mycrosoft logo' },
    
  ];
  const services = [
    {
      title: t('hero-repair-computer.card.title_1'),
      body: t('hero-repair-computer.card.body_1'),
      price: "300"
    },
    {
      title: t('hero-repair-computer.card.title_2'),
      body: t('hero-repair-computer.card.body_2'),
      price: "2000"
    },
    {
      title: t('hero-repair-computer.card.title_3'),
      body: t('hero-repair-computer.card.body_3'),
      price: "2200"
    },
    {
      title: t('hero-repair-computer.card.title_4'),
      body: t('hero-repair-computer.card.body_4'),
      price: "1500"
    },
    {
      title: t('hero-repair-computer.card.title_5'),
      body: t('hero-repair-computer.card.body_5'),
      price: "1000"
    },
    {
      title: t('hero-repair-computer.card.title_6'),
      body: t('hero-repair-computer.card.body_6'),
      price: "1000"
    },
    {
      title: t('hero-repair-computer.card.title_7'),
      body: t('hero-repair-computer.card.body_7'),
      price: "1200"
    }
  ];

  return (
    <div>
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
      </Helmet>

      <HeaderRepairComputer />
      
      <Carousel items={items} />

      <h2 className='title-2'>
        {t('hero-repair-computer.title_2')}
      </h2>
      <ServicesTable services={services} />
      
    </div>
  );
}

export default RepairImac;
