import React, { useState }from 'react';
import { useTranslation } from 'react-i18next';
import Header from './../components/header/Header'
import Advantages from './../components/advantages/Advantages'
import AnimatedCounter from "./../components/animationCounter/AnimatedCounter";
import Projects from './Projects';
import Timeline from '../components/timeLine/TimeLine';
import MapComponent from './../components/map/MapComponent';
import ArticleList from './../components//articleList/ArticleList';

import { Helmet } from 'react-helmet';
import RepairPhone from '../components/repairPhone/RepairPhone';

const Home = () => {
    const { t } = useTranslation();

    const [filters] = useState({
        snacks: true,
        naps: true,
        computers: true,
      });

      const articles = [
        {
          imgSrc: "https://content.rozetka.com.ua/goods/images/big/350130769.jpg",
          title: t('shope.screen_protectors'),
          category: "naps",
        },
        {
          imgSrc: "https://content.rozetka.com.ua/goods/images/big/218364767.jpg",
          title: t('shope.batteries'),
          category: "computers",
        },
        {
          imgSrc: "https://content.rozetka.com.ua/goods/images/big/250068853.jpg",
          title: t('shope.chargers'),
          category: "snacks",
        },
        {
          imgSrc: "https://content2.rozetka.com.ua/goods/images/big/372316597.jpg",
          title: t('shope.hubs_adapters'),
          category: "snacks",
        },
        {
          imgSrc: "https://content2.rozetka.com.ua/goods/images/big/398237734.jpg",
          title: t('shope.cases'),
          category: "naps",
        },
        {
          imgSrc: "https://quality.in.ua/content/images/47/600x600l80mc0/karta-pamiati-kingston-512gb-microsdxc-class-10-uhs-i-u3-a2-canvas-go-plus-sdcg3-512gb-82434345813446.webp",
          title: t('shope.storage_memory_cards'),
          category: "computers",
        },
        {
          imgSrc: "https://content.rozetka.com.ua/goods/images/big/336323415.jpg",
          title: t('shope.power_banks'),
          category: "computers",
        },
        {
          imgSrc: "https://eurounica.com/image/cache/catalog/paleti/tehnika/computer/kabeli-perehodniki/001/kabel-dlya-zaryadki-ugreen-usb-c-usb-c-100-vt-1m-2-sht-my-1102-860x860.jpg",
          title: t('shope.cables'),
          category: "snacks",
        },
        {
          imgSrc: "https://content2.rozetka.com.ua/goods/images/big/172266668.jpg",
          title: t('shope.headphones'),
          category: "naps",
        },
      ];
    
      const filteredArticles = articles.filter(article => filters[article.category]);


    
    return (
        <>
             <Helmet>
                <title>{t('home_title')}</title>
                <meta name="description" content={t('home_description')} />
            </Helmet>
            <Header />
            <main className="section">
                <div className="container">
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">{t('homep.advantages_title')}</h2>
                            <Advantages />
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">{t('homep.projects_title')}</h2>
                            <Projects />
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">{t('homep.repair_title')}</h2>
                            <RepairPhone />
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">{t('homep.shop-title')}</h2>
                            <ArticleList articles={filteredArticles} />
                        </li>
                        <li className="content-list__item">
                        <h2 className="title-2">{t('homep.map-title')}</h2>
                            <MapComponent />
                        </li>
                        <li className="content-list__item">
                            <AnimatedCounter />
                        </li>
                        <li className="content-list__item">
                            <Timeline />
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
}

export default Home;
