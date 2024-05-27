import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

function RepairSmartPhone() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t('repair_smartphone_title')}</title>
        <meta name="description" content={t('repair_smartphone_description')} />
      </Helmet>
      <h1>{t('repair_smartphone')}</h1>
    </div>
  );
}

export default RepairSmartPhone;
