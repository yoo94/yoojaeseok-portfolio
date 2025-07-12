'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '@/lib/language';

export default function Education() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-20 px-6 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto max-w-6xl">
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
            {t('education.title')}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4"
                >
                  <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {t('education.educationTitle')}
                  </h3>
                  <div className="w-12 h-1 bg-blue-500 rounded-full mt-2"></div>
                </div>
              </div>

              <div className="space-y-4">
                {/* KNOU */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {t('education.universities.knou.name')}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    {t('education.universities.knou.major')} | {t('education.universities.knou.degree')}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {t('education.universities.knou.period')} | {t('education.universities.knou.status')}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t('education.universities.knou.description')}
                  </p>
                </motion.div>

                {/* MTDI */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {t('education.universities.mtdi.name')}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    {t('education.universities.mtdi.major')} | {t('education.universities.mtdi.degree')}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {t('education.universities.mtdi.period')} | {t('education.universities.mtdi.status')}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t('education.universities.mtdi.description')}
                  </p>
                </motion.div>

                {/* KTCU */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {t('education.universities.ktcu.name')}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    {t('education.universities.ktcu.major')} | {t('education.universities.ktcu.degree')}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {t('education.universities.ktcu.period')} | {t('education.universities.ktcu.status')}
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4"
                >
                  <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {t('education.certificationsTitle')}
                  </h3>
                  <div className="w-12 h-1 bg-purple-500 rounded-full mt-2"></div>
                </div>
              </div>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 border-l-4 border-purple-500"
                >
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    {t('education.certifications.sqld.name')}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {t('education.certifications.sqld.issuer')}
                  </p>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                    {t('education.certifications.sqld.date')}
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 border-l-4 border-purple-500"
                >
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    {t('education.certifications.engineer.name')}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {t('education.certifications.engineer.issuer')}
                  </p>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                    {t('education.certifications.engineer.date')}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
