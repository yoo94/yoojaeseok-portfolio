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
    <section id="about" className="py-20 px-6 bg-white dark:bg-slate-900">
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
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12"
          >
            {t('소개', 'About Me')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image Placeholder */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl"
              >
                <span className="text-6xl font-bold text-white">YJS</span>
              </motion.div>

              {/* About Content */}
              <div className="flex-1 text-left">
                <motion.p
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
                >
                  {t(
                    '웹 기술에 대한 깊은 이해와 사용자 중심적 사고를 바탕으로 혁신적인 웹 애플리케이션을 개발합니다. 새로운 기술을 빠르게 습득하고 적용하는 것을 즐기며, 팀과의 협업을 통해 더 나은 결과를 만들어냅니다.',
                    'I develop innovative web applications based on deep understanding of web technologies and user-centered thinking. I enjoy quickly learning and applying new technologies, and I create better results through collaboration with teams.'
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
                      {t('사용자 중심적 사고', 'User-Centered Thinking')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">
                      {t('빠른 학습 능력', 'Fast Learning')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">
                      {t('팀워크 & 협업', 'Teamwork & Collaboration')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">
                      {t('혁신적 솔루션', 'Innovative Solutions')}
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
