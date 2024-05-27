import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import planshImg from "./../img/icons/Phone maintenance-bro.svg";
import computerImg from "./../img/icons/Computer troubleshooting-amico.svg";
import phneImg from "./../img/icons/Phone maintenance-rafiki.svg";
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <main className="section">
            <ul className="projects">
                <li className='project-details' data-aos="fade-up" data-aos-delay="500">
                    <NavLink to="/repair_computer">
                        <div className="project-item">
                            <img src={computerImg} alt={t('repair_computers')} className="project-cover" />
							<h1 className="project-title">{t('repair_computers')}</h1>
                        </div>
                    </NavLink>
                </li>
                <li className='project-details' data-aos="fade-up" data-aos-delay="500">
                    <NavLink to="/repair_phone">
                        <div className="project-item">
                            
                            <img src={planshImg} alt={t('repair_phones')} className="project-cover" />
							<h1 className="project-title">{t('repair_phones')}</h1>
                        </div>
                    </NavLink>
                </li>
                <li className='project-details' data-aos="fade-up" data-aos-delay="500">
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
