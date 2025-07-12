'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Calendar, Briefcase } from 'lucide-react';
import { useLanguage } from '@/lib/language';
import Image from 'next/image';

export default function Projects() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // 프로젝트 아이콘 컴포넌트
  const ProjectIcon = ({ project }: { project: { key: string } }) => {
    const [imageError, setImageError] = useState(false);
    
    if (project.key === 'popcorntv' && !imageError) {
      return (
        <Image
          src="/image/logo_dark.svg"
          alt="PopcornTV Logo"
          width={42}
          height={42}
          className="w-42 h-42 object-contain"
          onError={() => setImageError(true)}
        />
      );
    }
    
    if (project.key === 'unidacu' && !imageError) {
      return (
        <Image
          src="/image/logo-uniworks.png"
          alt="Uniworks Logo"
          width={123}
          height={37}
          className="w-32 h-10 object-contain"
          onError={() => setImageError(true)}
        />
      );
    }
    
    if (project.key === 'unidacu_mobile' && !imageError) {
      return (
        <Image
          src="/image/logo-unipost.svg"
          alt="Unipost Logo"
          width={123}
          height={37}
          className="w-32 h-10 object-contain"
          onError={() => setImageError(true)}
        />
      );
    }
    if (project.key === 'shortform' && !imageError) {
      return (
        <Image
          src="/image/logo-short.png"
          alt="shortform Logo"
          width={123}
          height={37}
          className="w-32 h-10 object-contain"
          onError={() => setImageError(true)}
        />
      );
    }
    if (project.key === 'innerbooks' && !imageError) {
      return (
        <Image
          src="/image/logo-inner.png"
          alt="Innerbooks Logo"
          width={123}
          height={37}
          className="w-32 h-10 object-contain"
          onError={() => setImageError(true)}
        />
      );
    }
    if (project.key === 'typingchanger' && !imageError) {
      return (
        <Image
          src="/image/logo-typing.png"
          alt="Typing Logo"
          width={123}
          height={37}
          className="w-32 h-10 object-contain"
          onError={() => setImageError(true)}
        />
      );
    }

    return <Briefcase className="w-8 h-8 text-white" />;
  };

  const companyProjects = [
    {
      key: 'popcorntv',
      title: t('projects.company.popcorntv.title'),
      company: t('projects.company.popcorntv.company'),
      period: t('projects.company.popcorntv.period'),
      description: t('projects.company.popcorntv.description'),
      responsibilities: [
        t('projects.company.popcorntv.responsibilities.0'),
        t('projects.company.popcorntv.responsibilities.1')
      ],
      tech: ['Next.js', 'React', 'TypeScript', 'Axios', 'Jotai', 'Tailwind CSS', 'shadcn UI'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      key: 'shortform',
      title: t('projects.company.shortform.title'),
      company: t('projects.company.shortform.company'),
      period: t('projects.company.shortform.period'),
      description: t('projects.company.shortform.description'),
      responsibilities: [
        t('projects.company.shortform.responsibilities.0'),
        t('projects.company.shortform.responsibilities.1'),
        t('projects.company.shortform.responsibilities.2'),
        t('projects.company.shortform.responsibilities.3')
      ],
      tech: ['Next.js', 'React', 'TypeScript', 'Zustand', 'i18n', 'Tailwind CSS'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      key: 'unidacu',
      title: t('projects.company.unidacu.title'),
      company: t('projects.company.unidacu.company'),
      period: t('projects.company.unidacu.period'),
      description: t('projects.company.unidacu.description'),
      responsibilities: [
        t('projects.company.unidacu.responsibilities.0'),
        t('projects.company.unidacu.responsibilities.1'),
        t('projects.company.unidacu.responsibilities.2'),
        t('projects.company.unidacu.responsibilities.3'),
        t('projects.company.unidacu.responsibilities.4')
      ],
      tech: ['React', 'React Native', 'TypeScript', 'Redux', 'Spring', 'Java'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      key: 'unidacu_mobile',
      title: t('projects.company.unidacu_mobile.title'),
      company: t('projects.company.unidacu_mobile.company'),
      period: t('projects.company.unidacu_mobile.period'),
      description: t('projects.company.unidacu_mobile.description'),
      responsibilities: [
        t('projects.company.unidacu_mobile.responsibilities.0'),
        t('projects.company.unidacu_mobile.responsibilities.1'),
        t('projects.company.unidacu_mobile.responsibilities.2')
      ],
      tech: ['React', 'React Native', 'TypeScript', 'Redux'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const personalProjects = [
    {
      key: 'innerbooks',
      title: t('projects.personal.innerbooks.title'),
      description: t('projects.personal.innerbooks.description'),
      period: t('projects.personal.innerbooks.period'),
      tech: ['React', 'Spring Boot', 'MySQL', 'AWS'],
      link: t('projects.personal.innerbooks.link'),
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      key: 'typingchanger',
      title: t('projects.personal.typingchanger.title'),
      description: t('projects.personal.typingchanger.description'),
      period: t('projects.personal.typingchanger.period'),
      tech: ['JavaScript', 'npm'],
      link: t('projects.personal.typingchanger.link'),
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto max-w-7xl">
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
            {t('projects.title')}
          </motion.h2>

          {/* Company Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              {t('projects.companyProjects')}
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {companyProjects.map((project, index) => (
                <motion.div
                  key={project.key}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
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
                          className="w-48 h-24 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
                        >
                          <ProjectIcon project={project} />
                        </motion.div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-8">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h4>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        {project.company}
                      </p>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{project.period}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">주요 업무</h5>
                        <ul className="space-y-2">
                          {project.responsibilities.map((responsibility, respIndex) => (
                            <li key={respIndex} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-4 border-l-2 border-gray-200 dark:border-gray-600">
                              • {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                          {t('projects.technologiesUsed')}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-current rounded-full text-sm font-medium text-gray-700 dark:text-gray-300`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              {t('projects.personalProjects')}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {personalProjects.map((project, index) => (
                <motion.div
                  key={project.key}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
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
                          className="w-48 h-24 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
                        >
                          <ProjectIcon project={project} />
                        </motion.div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-8">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                      
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{project.period}</span>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                          {t('projects.technologiesUsed')}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-current rounded-full text-sm font-medium text-gray-700 dark:text-gray-300`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project Link */}
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow group`}
                      >
                        <span>{t('projects.viewProject')}</span>
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
