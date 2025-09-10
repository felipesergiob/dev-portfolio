import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaSpinner, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import emailService from '../services/emailService';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = formData.name.trim() !== '' &&
                     isEmailValid(formData.email.trim()) &&
                     formData.message.trim() !== '';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isFormValid) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const result = await emailService.sendContactEmail(formData);

      if (result.success) {
        setSubmitStatus('success');

        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  {t('contact.form.name')}
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  {t('contact.form.email')}
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    formData.email && !isEmailValid(formData.email)
                      ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                      : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                  } transition-colors`}
                  required
                />
                {formData.email && !isEmailValid(formData.email) && (
                  <p className="mt-1 text-sm text-red-500">
                    {t('contact.form.invalidEmail')}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  {t('contact.form.message')}
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  required
                ></textarea>
              </div>
              {/* Mensagem de feedback */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center space-x-2 ${
                    submitStatus === 'success'
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <FaCheck className="text-green-600" />
                  ) : (
                    <FaExclamationTriangle className="text-red-600" />
                  )}
                  <span>
                    {submitStatus === 'success'
                      ? t('contact.messages.success')
                      : t('contact.messages.error')}
                  </span>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: isFormValid && !isSubmitting ? 1.05 : 1 }}
                whileTap={{ scale: isFormValid && !isSubmitting ? 0.95 : 1 }}
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
                  isFormValid && !isSubmitting
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    <span>{t('contact.form.sending')}</span>
                  </>
                ) : (
                  <span>{t('contact.form.send')}</span>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8 p-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FaMapMarkerAlt className="text-2xl text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Location
                </h3>
                <p className="text-gray-600">{t('contact.info.location')}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FaEnvelope className="text-2xl text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Email
                </h3>
                <p className="text-gray-600">{t('contact.info.email')}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FaPhone className="text-2xl text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Phone
                </h3>
                <p className="text-gray-600">{t('contact.info.phone')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;