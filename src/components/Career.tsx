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

  const careers = [
    {
      key: 'theenm',
      company: t('career.careers.theenm.company'),
      position: t('career.careers.theenm.position'),
      type: t('career.careers.theenm.type'),
      period: t('career.careers.theenm.period'),
      description: t('career.careers.theenm.description'),
      responsibilities: [
        t('career.careers.theenm.responsibilities.0'),
        t('career.careers.theenm.responsibilities.1'),
        t('career.careers.theenm.responsibilities.2'),
        t('career.careers.theenm.responsibilities.3'),
        t('career.careers.theenm.responsibilities.4')
      ],
      skills: ['Next.js', 'TypeScript', 'React', 'Jenkins', 'Docker', 'GitLab', 'Jest', 'Playwright'],
      color: 'blue'
    },
    {
      key: 'unipost',
      company: t('career.careers.unipost.company'),
      position: t('career.careers.unipost.position'),
      type: t('career.careers.unipost.type'),
      period: t('career.careers.unipost.period'),
      description: t('career.careers.unipost.description'),
      responsibilities: [
        t('career.careers.unipost.responsibilities.0'),
        t('career.careers.unipost.responsibilities.1'),
        t('career.careers.unipost.responsibilities.2'),
        t('career.careers.unipost.responsibilities.3')
      ],
      skills: ['React', 'TypeScript', 'React Native', 'Redux', 'jQuery', 'RequireJS', 'Jenkins', 'Playwright'],
      color: 'purple'
    }
  ];

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
            {t('career.title')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-12 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {/* Career Cards */}
            {careers.map((career, index) => (
              <motion.div
                key={career.key}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.3 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`relative bg-gradient-to-r ${career.color === 'blue' ? 'from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700' : 'from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700'} rounded-2xl p-8 ml-16 shadow-xl border border-gray-200 dark:border-gray-700 ${index > 0 ? 'mt-8' : ''}`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.3 }}
                  className={`absolute -left-20 top-8 w-6 h-6 ${career.color === 'blue' ? 'bg-blue-500' : 'bg-purple-500'} rounded-full border-4 border-white dark:border-slate-900 shadow-lg`}
                ></motion.div>

                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className={`w-16 h-16 ${career.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900' : 'bg-purple-100 dark:bg-purple-900'} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <Briefcase className={`w-8 h-8 ${career.color === 'blue' ? 'text-blue-600 dark:text-blue-400' : 'text-purple-600 dark:text-purple-400'}`} />
                  </motion.div>

                  <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                      transition={{ duration: 0.8, delay: 1 + index * 0.3 }}
                      className="mb-4"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {career.position}
                      </h3>
                      <h4 className={`text-xl font-semibold ${career.color === 'blue' ? 'text-blue-600 dark:text-blue-400' : 'text-purple-600 dark:text-purple-400'} mb-2`}>
                        {career.company}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {career.type}
                      </p>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{career.period}</span>
                      </div>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: 1.2 + index * 0.3 }}
                      className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
                    >
                      {career.description}
                    </motion.p>

                    {/* Responsibilities */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: 1.4 + index * 0.3 }}
                      className="mb-6"
                    >
                      <h5 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">주요 업무</h5>
                      <ul className="space-y-2">
                        {career.responsibilities.map((responsibility, respIndex) => (
                          <motion.li
                            key={respIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.6, delay: 1.6 + index * 0.3 + respIndex * 0.1 }}
                            className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-4 border-l-2 border-gray-200 dark:border-gray-600"
                          >
                            • {responsibility}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Skills Used */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: 1.8 + index * 0.3 }}
                      className="mt-6"
                    >
                      <h5 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                        {t('career.technologiesUsed')}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {career.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ duration: 0.5, delay: 2 + index * 0.3 + skillIndex * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            className={`px-3 py-1 ${career.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' : 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'} rounded-full text-sm font-medium`}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
