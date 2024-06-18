import React from 'react';
import { useTranslation } from 'react-i18next';

function ServicesTable({ services }) {
  const { t } = useTranslation();

  return (
    <table className="rwd-table">
      <thead>
        <tr>
          <th>{t('hero-repair-computer.card.service-title')}</th>
          <th>{t('hero-repair-computer.card.description')}</th>
          <th>{t('hero-repair-computer.card.price')}</th>
        </tr>
      </thead>
      <tbody>
        {services.map((service, index) => (
          <tr key={index}>
            <td data-th="Послуга" className="service-title">{service.title}</td>
            <td data-th="Опис" className="service-description">{service.body}</td>
            <td data-th="Ціна" className="service-price">{service.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ServicesTable;
