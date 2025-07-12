'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/lib/language';

export default function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-16 xs:py-20 px-4 xs:px-6 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl xs:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 xs:mb-12"
          >
            {t('about.title')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 xs:p-8 md:p-12 shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 xs:gap-8">
              {/* Profile Image Placeholder */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl flex-shrink-0"
              >
                <span className="text-4xl xs:text-5xl sm:text-6xl font-bold text-white">YJS</span>
              </motion.div>

              {/* About Content */}
              <div className="flex-1 text-left">
                <motion.p
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-base xs:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4 xs:mb-6 text-center md:text-left px-2 xs:px-0"
                >
                  {t(
                    'about.description'
                  )}
                </motion.p>

                {/* Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">
                      {t('about.highlights.userCentered')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">
                      {t('about.highlights.fastLearning')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">
                      {t('about.highlights.teamwork')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">
                      {t('about.highlights.innovative')}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
