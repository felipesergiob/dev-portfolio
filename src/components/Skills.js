import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaJava,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaFigma,
  FaServer,
  FaCogs,
  FaRobot
} from 'react-icons/fa';
import { SiFlutter, SiPostgresql, SiMysql, SiMongodb, SiKubernetes, SiSocketdotio, SiRabbitmq } from 'react-icons/si';

function Skills() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const iconComponents = {
    // Languages & Frameworks
    'JavaScript (Node.js, React, Angular)': FaReact,
    'Dart (Flutter)': SiFlutter,
    'Java (Quarkus, Spring Boot)': FaJava,
    
    // Backend Development
    'RESTful APIs': FaServer,
    'Microservices': FaCogs,
    'CRON Jobs': FaCogs,
    'SQL (PostgreSQL, MySQL)': SiPostgresql,
    'Server-side Logic': FaServer,
    
    // Frontend Development
    'Responsive UI Design': FaFigma,
    'State Management (Redux, Context API)': FaReact,
    'Cross-platform Mobile Apps (Flutter)': SiFlutter,
    
    // DevOps & Deployment
    'Git': FaGitAlt,
    'CI/CD Pipelines (Codemagic, Jenkins)': FaCogs,
    'Docker': FaDocker,
    'Kubernetes': SiKubernetes,
    'AWS Cloud Services': FaAws,
    
    // Database
    'PostgreSQL': SiPostgresql,
    'MySQL': SiMysql,
    'MongoDB': SiMongodb,
    
    // Real-Time & Automation
    'WebSockets': SiSocketdotio,
    'Socket.IO': SiSocketdotio,
    'Workflow Automation (n8n)': FaCogs,
    'Task Scheduling': FaCogs,
    
    // AI & Machine Learning
    'AI Pipeline Design': FaRobot,
    'ML Models Integration': FaRobot,
    'RabbitMQ': SiRabbitmq,
    'APIs (Meta, Z-API)': FaServer
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('skills.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(t('skills.categories', { returnObjects: true })).map(([key, category]) => (
            <motion.div
              key={key}
              variants={itemVariants}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, index) => {
                  const Icon = iconComponents[item];
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      whileHover={{ x: 10 }}
                    >
                      {Icon && (
                        <Icon className="text-2xl text-blue-600" />
                      )}
                      <span className="text-gray-600">{item}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;