import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        {t('header.name')}
      </h1>
      <h2 className="text-2xl text-blue-600 mb-4">
        {t('header.title')}
      </h2>
      <div className="text-gray-600">
        <p>{t('header.contact')} | {t('header.email')}</p>
        <p>{t('header.location')}</p>
      </div>
    </header>
  );
}

export default Header;