'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '@/lib/language';

export default function Career() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="career" className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-16"
          >
            {t('경력', 'Career')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-12 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {/* Career Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 ml-16 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -left-20 top-8 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"
              ></motion.div>

              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </motion.div>

                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-4"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {t('백엔드 개발자', 'Backend Developer')}
                    </h3>
                    <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {t('애드프로', 'AdPro')}
                    </h4>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>2023.03 - 2024.10</span>
                    </div>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {t(
                      'Spring Boot 기반 웹 애플리케이션 개발 및 유지보수',
                      'Development and maintenance of Spring Boot-based web applications'
                    )}
                  </motion.p>

                  {/* Skills Used */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-6"
                  >
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                      {t('사용 기술', 'Technologies Used')}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {['Spring Boot', 'Java', 'MySQL', 'Git', 'AWS'].map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
