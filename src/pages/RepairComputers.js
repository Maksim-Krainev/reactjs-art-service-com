import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import HeaderRepairComputer from './../components/heroRepairComputer/HeroRepairComputer';
import Card from '../components/cardList/CardList';

import diagnosticPC from "./../img/computer-gf503448b9_640.jpg"

function RepairComputers() {
  const { t } = useTranslation();
  const cardsData = [
    {
      title: t('hero-repair-computer.card.title_1'),
      body: t('hero-repair-computer.card.body_1'),
      author: t('hero-repair-computer.card.price'),
      date: "1.000 UA",
      imageUrl: diagnosticPC
    },
    {
      title: t('hero-repair-computer.card.title_2'),
      body: t('hero-repair-computer.card.body_2'),
      author: t('hero-repair-computer.card.price'),
      date: "1.000 UA",
      imageUrl: diagnosticPC
    },
    {
      title: t('hero-repair-computer.card.title_3'),
      body: t('hero-repair-computer.card.body_3'),
      author: t('hero-repair-computer.card.price'),
      date: "1.000 UA",
      imageUrl: diagnosticPC
    },
    {
      title: t('hero-repair-computer.card.title_4'),
      body: t('hero-repair-computer.card.body_4'),
      author: t('hero-repair-computer.card.price'),
      date: "1.000 UA",
      imageUrl: diagnosticPC
    },
    {
      title: t('hero-repair-computer.card.title_5'),
      body: t('hero-repair-computer.card.body_5'),
      author: t('hero-repair-computer.card.price'),
      date: "1.000 UA",
      imageUrl: diagnosticPC
    }
  ];

  return (
    <div>
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
      </Helmet>

      <HeaderRepairComputer />
      
      <h2 className="title-2">{t('hero-repair-computer.title_2')}</h2>
      <div className='card-flex'>
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
      </div>
    </div>
  );
}

export default RepairComputers;
