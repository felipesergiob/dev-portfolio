import React from 'react';
import { useTranslation } from 'react-i18next';

function Experience() {
  const { t } = useTranslation();

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {t('experience.title')}
      </h2>
      <div className="space-y-6">
        {t('experience.jobs', { returnObjects: true }).map((job, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-800">
              {job.title} - {job.company}
            </h3>
            <p className="text-blue-600 mb-2">{job.period}</p>
            <p className="text-gray-600">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;