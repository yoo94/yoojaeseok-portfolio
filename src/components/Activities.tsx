'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Trophy, BookOpen, Code } from 'lucide-react';
import { useLanguage } from '@/lib/language';

export default function Activities() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const activities = [
    // {
    //   key: 'ssafy',
    //   icon: Users,
    //   gradient: 'from-orange-400 to-red-500',
    //   bgColor: 'from-orange-100 to-red-100',
    //   darkBgColor: 'from-orange-900 to-red-900',
    //   textColor: 'text-orange-700',
    //   darkTextColor: 'text-orange-300',
    //   borderColor: 'border-orange-200',
    //   darkBorderColor: 'border-orange-700',
    //   dotColor: 'bg-orange-500'
    // },
    {
      key: 'inner_circle',
      icon: Trophy,
      gradient: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-100 to-pink-100',
      darkBgColor: 'from-purple-900 to-pink-900',
      textColor: 'text-purple-700',
      darkTextColor: 'text-purple-300',
      borderColor: 'border-purple-200',
      darkBorderColor: 'border-purple-700',
      dotColor: 'bg-purple-500'
    },
    {
      key: 'js_study',
      icon: Code,
      gradient: 'from-blue-400 to-cyan-500',
      bgColor: 'from-blue-100 to-cyan-100',
      darkBgColor: 'from-blue-900 to-cyan-900',
      textColor: 'text-blue-700',
      darkTextColor: 'text-blue-300',
      borderColor: 'border-blue-200',
      darkBorderColor: 'border-blue-700',
      dotColor: 'bg-blue-500'
    },
    {
      key: 'react_study',
      icon: BookOpen,
      gradient: 'from-green-400 to-emerald-500',
      bgColor: 'from-green-100 to-emerald-100',
      darkBgColor: 'from-green-900 to-emerald-900',
      textColor: 'text-green-700',
      darkTextColor: 'text-green-300',
      borderColor: 'border-green-200',
      darkBorderColor: 'border-green-700',
      dotColor: 'bg-green-500'
    }
  ];

  return (
    <section id="activities" className="py-20 px-6 bg-gray-50 dark:bg-slate-800">
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
            {t('activities.title')}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              const isInProgress = t(`activities.activities.${activity.key}.status`) === '진행 중' || 
                                   t(`activities.activities.${activity.key}.status`) === 'In Progress';
              
              return (
                <motion.div
                  key={activity.key}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start space-x-6">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`w-16 h-16 bg-gradient-to-r ${activity.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                        className="mb-4"
                      >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {t(`activities.activities.${activity.key}.title`)}
                        </h3>
                        
                        {/* Organization for Inner Circle */}
                        {activity.key === 'inner_circle' && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                            {t(`activities.activities.${activity.key}.organization`)}
                          </p>
                        )}
                        
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">{t(`activities.activities.${activity.key}.period`)}</span>
                          {(activity.key === 'js_study' || activity.key === 'react_study') && (
                            <span className="ml-2 text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                              {t(`activities.activities.${activity.key}.frequency`)}
                            </span>
                          )}
                        </div>
                      </motion.div>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                        className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm"
                      >
                        {t(`activities.activities.${activity.key}.description`)}
                      </motion.p>

                      {/* Status Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                        className="inline-flex items-center mb-4"
                      >
                        <span className={`px-3 py-1 bg-gradient-to-r ${activity.bgColor} dark:${activity.darkBgColor} ${activity.textColor} dark:${activity.darkTextColor} rounded-full text-xs font-semibold border ${activity.borderColor} dark:${activity.darkBorderColor}`}>
                          {isInProgress && <span className={`w-2 h-2 ${activity.dotColor} rounded-full inline-block mr-2 animate-pulse`}></span>}
                          {t(`activities.activities.${activity.key}.status`)}
                        </span>
                      </motion.div>

                      {/* Activity Highlights */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                      >
                        {Array.from({ length: 4 }, (_, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className={`w-1.5 h-1.5 ${activity.dotColor} rounded-full`}></div>
                            <span className="text-gray-600 dark:text-gray-400 text-xs">
                              {t(`activities.activities.${activity.key}.highlights.${i}`)}
                            </span>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
