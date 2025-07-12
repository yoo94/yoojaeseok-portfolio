'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Server, Settings } from 'lucide-react';
import { useLanguage } from '@/lib/language';

export default function Skills() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: t('skills.frontend'),
      icon: Code,
      color: 'from-blue-400 to-cyan-500',
      skills: [
        { name: 'React', level: 7 },
        { name: 'Next.js', level: 7 },
        { name: 'TypeScript', level: 5 },
        { name: 'JavaScript', level: 9 },
        { name: 'HTML/CSS', level: 8 },
        { name: 'jQuery', level: 6 }
      ]
    },
    {
      title: t('skills.backend'),
      icon: Server,
      color: 'from-green-400 to-emerald-500',
      skills: [
        { name: 'Java', level: 6 },
        { name: 'Spring', level: 4 },
        { name: 'Node.js', level: 4 }
      ]
    },
    {
      title: t('skills.infra'),
      icon: Server,
      color: 'from-orange-400 to-red-500',
      skills: [
        { name: 'Docker', level: 6 },
        { name: 'tomcat9', level: 5 },
        { name: 'apache', level: 5 },
        { name: 'Jenkins', level: 5 }
      ]
    },
    {
      title: t('skills.tools'),
      icon: Settings,
      color: 'from-gray-400 to-slate-500',
      skills: [
        { name: 'Git', level: 7 },
        { name: 'Figma', level: 4 },
        { name: 'Redmine', level: 7 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 xs:py-20 px-4 xs:px-6 bg-white dark:bg-slate-900">
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
            {t('skills.title')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-600 group"
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  <div className={`w-12 h-1 bg-gradient-to-r ${category.color} rounded-full mx-auto`}></div>
                </div>

                {/* Skills Grid */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow-md border border-gray-100 dark:border-gray-600 group-hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-800 dark:text-gray-200 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}/10
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level * 10}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: 1 + categoryIndex * 0.2 + skillIndex * 0.1 
                          }}
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
