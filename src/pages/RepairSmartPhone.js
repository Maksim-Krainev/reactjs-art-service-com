import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import HeaderRepairMobile from '../components/heroRepairMobile/HeroRepairMobile';

import ServicesTable from '../components/serviceTable/serviceTable';
import Carousel from '../components/carusel/Carusel';

import imgSamsung from "./../img/logo-phone/samsungLogo.png";
import imgApl from "./../img/logo-phone/aplleLogo.png";
import imgMeizu from "./../img/logo-phone/meizuLogo.png";
import imgMicrosoft from "./../img/logo-phone/microsoftLogo.png";
import imgMotorola from "./../img/logo-phone/motorolaLogo.png";
import imgNokia from "./../img/logo-phone/nokiaLogo.png";
import imgOneplus from "./../img/logo-phone/omeplusLogo.png";
import imgPixel from "./../img/logo-phone/pixelLogo.png";
import imgXiomi from "./../img/logo-phone/xiomiLogo.png";
import imgXuavei from "./../img/logo-phone/xuaveiLogo.png";

function RepairSmartPhone() {
  const { t } = useTranslation();
  const items = [
    { src: imgApl, alt: 'apple' },
    { src: imgSamsung, alt: 'samsung' },
    { src: imgMeizu, alt: 'meizu' },
    { src: imgMicrosoft, alt: 'microsoft' },
    { src: imgMotorola, alt: 'motorola' },
    { src: imgNokia, alt: 'nokia' },
    { src: imgOneplus, alt: 'oneplus' },
    { src: imgPixel, alt: 'google pixel' },
    { src: imgXiomi, alt: 'xiomi' },
    { src: imgXuavei, alt: 'xuavei' },
    { src: imgApl, alt: 'apple' },
    { src: imgSamsung, alt: 'samsung' },
    { src: imgMeizu, alt: 'meizu' },
    { src: imgMicrosoft, alt: 'microsoft' },
    { src: imgMotorola, alt: 'motorola' },
    { src: imgNokia, alt: 'nokia' },
    { src: imgOneplus, alt: 'oneplus' },
    { src: imgPixel, alt: 'google pixel' },
    { src: imgXiomi, alt: 'xiomi' },
    { src: imgXuavei, alt: 'xuavei' },  
    { src: imgApl, alt: 'apple' },
    { src: imgSamsung, alt: 'samsung' },
    { src: imgMeizu, alt: 'meizu' },
    { src: imgMicrosoft, alt: 'microsoft' },
    { src: imgMotorola, alt: 'motorola' },
    { src: imgNokia, alt: 'nokia' },
    { src: imgOneplus, alt: 'oneplus' },
    { src: imgPixel, alt: 'google pixel' },
    { src: imgXiomi, alt: 'xiomi' },
    { src: imgXuavei, alt: 'xuavei' },      
  ];

  const services = [
    {
      title: t('hero-repair-phone.card.title_1'),
      body: t('hero-repair-phone.card.body_1'),
      price: "300"
    },
    {
      title: t('hero-repair-phone.card.title_2'),
      body: t('hero-repair-phone.card.body_2'),
      price: "2200"
    },
    {
      title: t('hero-repair-phone.card.title_3'),
      body: t('hero-repair-phone.card.body_3'),
      price: "1000"
    },
    {
      title: t('hero-repair-phone.card.title_4'),
      body: t('hero-repair-phone.card.body_4'),
      price: "850"
    },
    {
      title: t('hero-repair-phone.card.title_5'),
      body: t('hero-repair-phone.card.body_5'),
      price: "850"
    },
    {
      title: t('hero-repair-phone.card.title_6'),
      body: t('hero-repair-phone.card.body_6'),
      price: "1500"
    },
    {
      title: t('hero-repair-phone.card.title_7'),
      body: t('hero-repair-phone.card.body_7'),
      price: "850"
    },
    {
      title: t('hero-repair-phone.card.title_8'),
      body: t('hero-repair-phone.card.body_8'),
      price: "650"
    },
    {
      title: t('hero-repair-phone.card.title_9'),
      body: t('hero-repair-phone.card.body_9'),
      price: "350"
    },
    {
      title: t('hero-repair-phone.card.title_10'),
      body: t('hero-repair-phone.card.body_10'),
      price: "1000"
    },
    {
      title: t('hero-repair-phone.card.title_11'),
      body: t('hero-repair-phone.card.body_11'),
      price: "1000"
    },
    {
      title: t('hero-repair-phone.card.title_12'),
      body: t('hero-repair-phone.card.body_12'),
      price: "2000"
    },
    {
      title: t('hero-repair-phone.card.title_13'),
      body: t('hero-repair-phone.card.body_13'),
      price: "800"
    },
    {
      title: t('hero-repair-phone.card.title_14'),
      body: t('hero-repair-phone.card.body_14'),
      price: "1800"
    },
    {
      title: t('hero-repair-phone.card.title_15'),
      body: t('hero-repair-phone.card.body_15'),
      price: "1500"
    },
    {
      title: t('hero-repair-phone.card.title_16'),
      body: t('hero-repair-phone.card.body_16'),
      price: "1500"
    },
    {
      title: t('hero-repair-phone.card.title_17'),
      body: t('hero-repair-phone.card.body_17'),
      price: "1500"
    },
    {
      title: t('hero-repair-phone.card.title_18'),
      body: t('hero-repair-phone.card.body_18'),
      price: "550"
    },
    {
      title: t('hero-repair-phone.card.title_19'),
      body: t('hero-repair-phone.card.body_19'),
      price: "2000"
    },
    
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
