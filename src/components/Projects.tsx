'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Calendar, Code } from 'lucide-react';
import { useLanguage } from '@/lib/language';

export default function Projects() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: t('InnerBooks - 도서 추천 웹사이트', 'InnerBooks - Book Recommendation Website'),
      description: t(
        '사용자 취향 기반 도서 추천 시스템을 구현한 웹사이트입니다. 개인화된 추천 알고리즘과 직관적인 UI/UX를 통해 사용자에게 최적의 도서를 제안합니다.',
        'A book recommendation website with a user preference-based recommendation system. Provides optimal book suggestions through personalized algorithms and intuitive UI/UX.'
      ),
      tech: ['React', 'Spring Boot', 'MySQL', 'AWS'],
      period: t('2024.03 - 2024.05', '2024.03 - 2024.05'),
      link: 'https://www.innerbooks.shop/',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      title: t('TypingChanger Easy - NPM 패키지', 'TypingChanger Easy - NPM Package'),
      description: t(
        '텍스트 타이핑 애니메이션을 쉽게 구현할 수 있는 JavaScript 라이브러리입니다. 간단한 설정으로 다양한 타이핑 효과를 웹사이트에 적용할 수 있습니다.',
        'A JavaScript library for easy implementation of text typing animations. Allows applying various typing effects to websites with simple configuration.'
      ),
      tech: ['JavaScript', 'npm'],
      period: t('2024.06 - 2024.07', '2024.06 - 2024.07'),
      link: 'https://www.npmjs.com/package/typingchanger_easy',
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-slate-800">
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
            {t('프로젝트', 'Projects')}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 h-full">
                  {/* Project Header */}
                  <div className={`h-32 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-white/10 backdrop-blur-sm"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
                      >
                        <Code className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{project.period}</span>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                        className="mb-6"
                      >
                        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">사용 기술</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                              transition={{ 
                                duration: 0.5, 
                                delay: 1 + index * 0.2 + techIndex * 0.1 
                              }}
                              whileHover={{ scale: 1.1 }}
                              className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-current rounded-full text-sm font-medium text-gray-700 dark:text-gray-300`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Project Link */}
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow group`}
                      >
                        <span>프로젝트 보기</span>
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
