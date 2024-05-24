import React from 'react';
import { useTranslation } from 'react-i18next';

import "./style.css";

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <li className="nav-list__item">
            {i18n.language !== 'uk' && (
                <button className="button primary" onClick={() => handleLanguageChange('uk')}>
                    {t('language_switcher.uk')}
                </button>
            )}
            {i18n.language !== 'ru' && (
                <button className="button secondary" onClick={() => handleLanguageChange('ru')}>
                    {t('language_switcher.ru')}
                </button>
            )}
        </li>
    );
}

export default LanguageSwitcher;
