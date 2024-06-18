import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import HeaderRepairNote from '../components/heroRepairNote/HeroRepairNote';
import ServicesTable from '../components/serviceTable/serviceTable';
import Carousel from '../components/carusel/Carusel';

import imgSamsung from "./../img/logo-phone/samsungLogo.png";
import imgApl from "./../img/logo-phone/aplleLogo.png";
import imgAcer from "./../img/logo-phone/acerLogo.png";
import imgHtc from "./../img/logo-phone/htcLogo.png";
import imgAsus from "./../img/logo-phone/asusLogo.png";
import imgLenovo from "./../img/logo-phone/lenovoLogo.png";
import imgLg from "./../img/logo-phone/lgLogo.png";
import imgDell from "./../img/logo-phone/dellLogo.png";
import imgMicrosoft from "./../img/png/microsoft-logo-svgrepo-com (1).svg";


function RepairMackbook() {
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
      title: t('hero-repair-note.card.title_1'),
      body: t('hero-repair-note.card.body_1'),
      price: "300"
    },
    {
      title: t('hero-repair-note.card.title_2'),
      body: t('hero-repair-note.card.body_2'),
      price: "2300"
    },
    {
      title: t('hero-repair-note.card.title_3'),
      body: t('hero-repair-note.card.body_3'),
      price: "2200"
    },
    {
      title: t('hero-repair-note.card.title_4'),
      body: t('hero-repair-note.card.body_4'),
      price: "1500"
    },
    {
      title: t('hero-repair-note.card.title_5'),
      body: t('hero-repair-note.card.body_5'),
      price: "3200"
    },
    {
      title: t('hero-repair-note.card.title_6'),
      body: t('hero-repair-note.card.body_6'),
      price: "1200"
    },
    {
      title: t('hero-repair-note.card.title_7'),
      body: t('hero-repair-note.card.body_7'),
      price: "1200"
    },
    {
      title: t('hero-repair-note.card.title_8'),
      body: t('hero-repair-note.card.body_8'),
      price: "1000"
    },
    {
      title: t('hero-repair-note.card.title_9'),
      body: t('hero-repair-note.card.body_9'),
      price: "1200"
    },
    {
      title: t('hero-repair-note.card.title_10'),
      body: t('hero-repair-note.card.body_10'),
      price: "1000"
    },
    {
      title: t('hero-repair-note.card.title_11'),
      body: t('hero-repair-note.card.body_11'),
      price: "1200"
    },
  ];

  return (
    <div>
      <Helmet>
        <title>{t('repair_phone_title')}</title>
        <meta name="description" content={t('repair_phone_description')} />
      </Helmet>
      <HeaderRepairNote />
      <Carousel items={items} />
      <h2 className='title-2'>
        {t('hero-repair-computer.title_2')}
      </h2>
      <ServicesTable services={services} />
    </div>
  );
}

export default RepairMackbook;
