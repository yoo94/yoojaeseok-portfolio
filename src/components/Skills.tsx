'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Server, Wrench } from 'lucide-react';
import { useLanguage } from '@/lib/language';

export default function Skills() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: t('프론트엔드', 'Frontend'),
      icon: Code,
      color: 'from-blue-400 to-cyan-500',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS']
    },
    {
      title: t('백엔드', 'Backend'),
      icon: Server,
      color: 'from-green-400 to-emerald-500',
      skills: ['Java', 'Spring Boot', 'Node.js', 'Python', 'MySQL', 'PostgreSQL']
    },
    {
      title: t('도구', 'Tools'),
      icon: Wrench,
      color: 'from-purple-400 to-pink-500',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-slate-900">
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
            {t('핵심 역량', 'Core Skills')}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
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
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow-md border border-gray-100 dark:border-gray-600 group-hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-800 dark:text-gray-200 font-medium">
                          {skill}
                        </span>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: '100%' } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: 1 + categoryIndex * 0.2 + skillIndex * 0.1 
                          }}
                          className={`h-1 bg-gradient-to-r ${category.color} rounded-full ml-4 max-w-[40px]`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Skill Level Indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 + categoryIndex * 0.2 }}
                  className="mt-6 text-center"
                >
                  <div className="flex justify-center space-x-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <motion.div
                        key={level}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 1.7 + categoryIndex * 0.2 + level * 0.1 
                        }}
                        className={`w-2 h-2 rounded-full ${
                          level <= 4 
                            ? `bg-gradient-to-r ${category.color}` 
                            : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">숙련도</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
