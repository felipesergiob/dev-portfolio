import React from 'react';
import { useTranslation } from 'react-i18next';

function Education() {
  const { t } = useTranslation();

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {t('education.title')}
      </h2>
      <div className="border-l-4 border-blue-500 pl-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {t('education.degree')}
        </h3>
        <p className="text-blue-600">{t('education.school')}</p>
        <p className="text-gray-600">{t('education.graduation')}</p>
      </div>
    </section>
  );
}

export default Education;