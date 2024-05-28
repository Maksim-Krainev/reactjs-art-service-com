import React from 'react';
import i18n from './../../i18n';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './../languageSwitcher/LanguageSwitcher';

import "./style.css";

const LanguagePrompt = ({ onClose }) => {
    const { t } = useTranslation();
  
    const handleConfirm = () => {
      localStorage.setItem('selectedLanguage', i18n.language);
      onClose();
    };
  
    return (
        <div className="language-prompt-overlay">
          <div className="language-prompt">
            <p >{t('language_prompt.title')}</p>
            <h2 className='title-2' >Art Service</h2>
            <p>{t('language_prompt.message', { language: i18n.language === 'uk' ? 'українській' : 'русском' })}</p>
            <div className='language-btn'>
            <button className="button primary" onClick={handleConfirm}>{t('language_prompt.confirm')}</button>
            <LanguageSwitcher/>
            </div>
          </div>
        </div>
      );
  };

export default LanguagePrompt;
