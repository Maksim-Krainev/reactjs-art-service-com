import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

function RepairPhone() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t('repair_phone_title')}</title>
        <meta name="description" content={t('repair_phone_description')} />
      </Helmet>
      <h1>{t('repair_phone')}</h1>
    </div>
  );
}

export default RepairPhone;
