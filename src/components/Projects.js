import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaAppStore, FaGooglePlay } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

function Projects() {
  const { t } = useTranslation();
  const [tooltipVisible, setTooltipVisible] = useState(null);

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
    <section id="projects" className="py-20 bg-gray-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('projects.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t('projects.items', { returnObjects: true }).map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end space-x-4">
                  {/* GitHub Link */}
                  {project.github && (
                    <motion.div
                      className="relative"
                      onMouseEnter={() => setTooltipVisible(index)}
                      onMouseLeave={() => setTooltipVisible(null)}
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className={`text-gray-600 hover:text-blue-600 ${project.isPrivate ? 'cursor-not-allowed opacity-50' : ''}`}
                        onClick={project.isPrivate ? (e) => e.preventDefault() : undefined}
                      >
                        <SiGithub className="text-xl" />
                      </motion.a>
                      {project.isPrivate && tooltipVisible === index && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap z-10">
                          {project.privateTooltip}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* VS Code Marketplace */}
                  {project.vscode && (
                    <motion.a
                      href={project.vscode}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-600 hover:text-blue-600"
                      title="VS Code Marketplace"
                    >
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" 
                        alt="VS Code" 
                        className="w-5 h-5"
                      />
                    </motion.a>
                  )}

                  {/* Cursor Marketplace */}
                  {project.cursor && (
                    <motion.a
                      href={project.cursor}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-600 hover:text-blue-600"
                      title="Cursor Marketplace"
                    >
                      <img 
                        src="https://cursor.sh/favicon.ico" 
                        alt="Cursor" 
                        className="w-5 h-5"
                      />
                    </motion.a>
                  )}

                  {/* App Store */}
                  {project.appstore && (
                    <motion.a
                      href={project.appstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-600 hover:text-blue-600"
                      title="App Store"
                    >
                      <FaAppStore className="text-xl" />
                    </motion.a>
                  )}

                  {/* Google Play Store */}
                  {project.playstore && (
                    <motion.a
                      href={project.playstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-600 hover:text-blue-600"
                      title="Google Play Store"
                    >
                      <FaGooglePlay className="text-xl" />
                    </motion.a>
                  )}

                  {/* Fallback external link */}
                  {!project.github && !project.vscode && !project.cursor && !project.appstore && !project.playstore && project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-600 hover:text-blue-600"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;