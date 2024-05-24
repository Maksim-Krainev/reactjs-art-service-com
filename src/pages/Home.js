import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './../components/header/Header'
import Advantages from './../components/advantages/Advantages'
import AnimatedCounter from "./../components/animationCounter/AnimatedCounter";
import Projects from './Projects';
import Timeline from '../components/timeLine/TimeLine';

const Home = () => {
    const { t } = useTranslation();
    
    return (
        <>
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
                            <h2 className="title-2">{t('homep.counter_title')}</h2>
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
