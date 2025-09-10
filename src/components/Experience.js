import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function Experience() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('experience.title')}
          </h2>
        </motion.div>

        <div className="space-y-8">
          {t('experience.jobs', { returnObjects: true }).map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {job.title}
                  </h3>
                  <p className="text-lg font-semibold text-blue-600 mb-1">
                    {job.company}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {job.period} • {job.location}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {job.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;