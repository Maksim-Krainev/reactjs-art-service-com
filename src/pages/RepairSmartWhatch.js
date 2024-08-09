import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import HeaderRepairSmartWhatch from '../components/heroRepairSmartWhatch/HeroRepairSmartWhatch';

import ServicesTable from '../components/serviceTable/serviceTable';



function RepairSmartWhatch() {
  const { t } = useTranslation();

  const services = [
    {
      title: t('hero-repair-whatch.card.title_1'),
      body: t('hero-repair-whatch.card.body_1'),
      price: "7999"
    },
    {
      title: t('hero-repair-whatch.card.title_2'),
      body: t('hero-repair-whatch.card.body_2'),
      price: "4999"
    },
    {
      title: t('hero-repair-whatch.card.title_3'),
      body: t('hero-repair-whatch.card.body_3'),
      price: "1999"
    },
    {
      title: t('hero-repair-whatch.card.title_4'),
      body: t('hero-repair-whatch.card.body_4'),
      price: "899"
    },
    {
      title: t('hero-repair-whatch.card.title_5'),
      body: t('hero-repair-whatch.card.body_5'),
      price: "2999"
    },

    
  ];
  

  return (
    <div>
      <Helmet>
        <title>{t('repair_smartphone_title')}</title>
        <meta name="description" content={t('repair_smartphone_description')} />
      </Helmet>
      <HeaderRepairSmartWhatch />
      <h2 className='title-2'>
        {t('hero-repair-whatch.title_2')}
      </h2>
      <ServicesTable services={services} />
    </div>
  );
}

export default RepairSmartWhatch;
