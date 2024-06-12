import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import planshImg from "./../img/png/laptop_ico2.png";
import computerImg from "./../img/png/comp_ico2.png";
import phneImg from "./../img/png/mob_ico2.png";
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 100,
        });
    }, []);

    return (
        <main className="section">
            <ul className="projects">
                <li className='project-details' data-aos="fade-up" data-aos-delay="30">
                    <NavLink to="/repair_computer">
                        <div className="project-item">
                            <img src={computerImg} alt={t('repair_computers')} className="project-cover" />
							<h1 className="project-title">{t('repair_computers')}</h1>
                        </div>
                    </NavLink>
                </li>
                <li className='project-details' data-aos="fade-up" data-aos-delay="30">
                    <NavLink to="/repair_phone">
                        <div className="project-item">
                            
                            <img src={planshImg} alt={t('repair_phones')} className="project-cover" />
							<h1 className="project-title">{t('repair_phones')}</h1>
                        </div>
                    </NavLink>
                </li>
                <li className='project-details' data-aos="fade-up" data-aos-delay="30">
                    <NavLink to="/repair_smartphones">
                        <div className="project-item">
                            <img src={phneImg} alt={t('repair_smartphones')} className="project-cover" />
							<h1 className="project-title">{t('repair_smartphones')}</h1>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </main>
    );
};

export default Projects;
