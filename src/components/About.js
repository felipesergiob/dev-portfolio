import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode } from 'react-icons/fa';

function About() {
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
    <section id="about" className="py-20 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={itemVariants}
            className="bg-blue-50 rounded-lg p-8 flex items-center"
          >
            <div className="mr-6">
              <FaCode className="text-4xl text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {t('about.experience.title')}
              </h3>
              <p className="text-3xl font-bold text-blue-600 mb-1">
                {t('about.experience.years')}
              </p>
              <p className="text-gray-600">
                {t('about.experience.description')}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-blue-50 rounded-lg p-8 flex items-center"
          >
            <div className="mr-6">
              <FaLaptopCode className="text-4xl text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {t('about.projects.title')}
              </h3>
              <p className="text-3xl font-bold text-blue-600 mb-1">
                {t('about.projects.count')}
              </p>
              <p className="text-gray-600">
                {t('about.projects.description')}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;