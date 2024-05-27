import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

function RepairComputers() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
      </Helmet>
      <h1>{t('repair_computers')}</h1>
    </div>
  );
}

export default RepairComputers;
