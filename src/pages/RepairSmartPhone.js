import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import HeaderRepairMobile from '../components/heroRepairMobile/HeroRepairMobile';

import ServicesTable from '../components/serviceTable/serviceTable';
import Carousel from '../components/carusel/Carusel';


import imgSamsung from "./../img/png/samsung-svgrepo-com.svg";
import imgApl from "./../img/png/apple-black-logo-svgrepo-com (1).svg";
import imgXiomi from "./../img/png/xiaomi-svgrepo-com.svg";
import imgHuavei from "./../img/png/huawei-svgrepo-com.svg";
import imgLg from "./../img/png/lg-svgrepo-com.svg";
import imgLenovo from "./../img/png/lenovo-svgrepo-com.svg";
import imgNokia from "./../img/png/nokia-svgrepo-com.svg";
import imgDell from "./../img/png/dell-2-logo-svgrepo-com.svg";
import imgAcer from "./../img/png/acer-svgrepo-com.svg";
import imgAsus from "./../img/png/asus-svgrepo-com.svg";
import imgMicrosoft from "./../img/png/microsoft-logo-svgrepo-com (1).svg";
import imgOne from "./../img/png/oneplus-svgrepo-com.svg";

function RepairSmartPhone() {
  const { t } = useTranslation();
  const items = [
    { src: imgAcer, alt: 'Apple' },
    { src: imgApl, alt: 'Google' },
    { src: imgDell, alt: 'Amazon' },
    { src: imgLg, alt: 'Microsoft' },
    { src: imgSamsung, alt: 'Facebook' },
    { src: imgMicrosoft, alt: 'Netflix' },
    { src: imgLenovo, alt: 'Tesla' },
    { src: imgAsus, alt: 'Nike' },
    { src: imgNokia, alt: 'Apple' },
    { src: imgOne, alt: 'Google' },
    { src: imgXiomi, alt: 'Amazon' },
    { src: imgHuavei, alt: 'Microsoft' },
    { src: imgAcer, alt: 'Apple' },
    { src: imgApl, alt: 'Google' },
    { src: imgDell, alt: 'Amazon' },
    { src: imgLg, alt: 'Microsoft' },
    { src: imgSamsung, alt: 'Facebook' },
    { src: imgMicrosoft, alt: 'Netflix' },
    { src: imgLenovo, alt: 'Tesla' },
    { src: imgAsus, alt: 'Nike' },
    { src: imgNokia, alt: 'Apple' },
    { src: imgOne, alt: 'Google' },
    { src: imgXiomi, alt: 'Amazon' },
    { src: imgHuavei, alt: 'Microsoft' },
    
  ];

  const services = [
    {
      title: t('hero-repair-note.card.title_1'),
      body: t('hero-repair-note.card.body_1'),
      price: "1500"
    },
    {
      title: t('hero-repair-note.card.title_2'),
      body: t('hero-repair-note.card.body_2'),
      price: "1500"
    },
    {
      title: t('hero-repair-note.card.title_3'),
      body: t('hero-repair-note.card.body_3'),
      price: "1500"
    },
    {
      title: t('hero-repair-note.card.title_4'),
      body: t('hero-repair-note.card.body_4'),
      price: "1500"
    },
    {
      title: t('hero-repair-note.card.title_5'),
      body: t('hero-repair-note.card.body_5'),
      price: "1500"
    },
    {
      title: t('hero-repair-note.card.title_6'),
      body: t('hero-repair-note.card.body_6'),
      price: "1500"
    }
  ];
  

  return (
    <div>
      <Helmet>
        <title>{t('repair_smartphone_title')}</title>
        <meta name="description" content={t('repair_smartphone_description')} />
      </Helmet>
      <HeaderRepairMobile />
      <Carousel items={items} />
      <h2 className='title-2'>
        {t('hero-repair-computer.title_2')}
      </h2>
      <ServicesTable services={services} />
    </div>
  );
}

export default RepairSmartPhone;
