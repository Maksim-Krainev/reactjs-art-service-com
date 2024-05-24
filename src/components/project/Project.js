import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import './style.css';

const Project = ({ title, img, index }) => {
    const { t } = useTranslation();
    
    return (
        <NavLink to={`/project/${index}`}>
            <li className="project">
                <img src={img} alt={t(`projects.${index}.title`)} className="project__img" />
                <h3 className="project__title">{t(`projects.${index}.title`)}</h3>
            </li>
        </NavLink>
    );
};

export default Project;
