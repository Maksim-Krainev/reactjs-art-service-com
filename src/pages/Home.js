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
          imgSrc: "https://images.unsplash.com/photo-1708724195876-1156245fce21?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400",
          title: t('shope.screen_protectors'),
          category: "naps",
        },
        {
          imgSrc: "https://images.unsplash.com/photo-1709625862284-b8a82d339b99?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400",
          title: t('shope.batteries'),
          category: "computers",
        },
        {
          imgSrc: "https://images.unsplash.com/photo-1643916861364-02e63ce3e52f?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400",
          title: t('shope.chargers'),
          category: "snacks",
        },
        {
          imgSrc: "https://images.unsplash.com/photo-1672217617440-1dd3e9417ce1?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400",
          title: t('shope.hubs_adapters'),
          category: "snacks",
        },
        {
          imgSrc: "https://images.unsplash.com/photo-1699462515761-90db271d77c8?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400",
          title: t('shope.cases'),
          category: "naps",
        },
        {
          imgSrc: "https://images.unsplash.com/photo-1709625862266-014ef072fd93?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400",
          title: t('shope.storage_memory_cards'),
          category: "computers",
        },
        {
          imgSrc: "https://images.unsplash.com/photo-1695278255455-9afc87008775?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400",
          title: t('shope.power_banks'),
          category: "computers",
        },
        {
          imgSrc: "https://images.unsplash.com/photo-1637611331620-51149c7ceb94?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400",
          title: t('shope.cables'),
          category: "snacks",
        },
        {
          imgSrc: "https://images.unsplash.com/photo-1688748807457-d8926e351596?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400",
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
