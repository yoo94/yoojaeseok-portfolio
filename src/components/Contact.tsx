'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Globe, BookOpen, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/language';

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contacts = [
    {
      title: t('contact.github'),
      url: 'https://github.com/yoo94',
      icon: Github,
      color: 'from-gray-700 to-gray-900',
      description: t('contact.githubDesc'),
      buttonText : t('contact.visitSite')
    },
    {
      title: t('contact.portfolio'),
      url: './down/yoojaeseokPortfolio.pdf',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      description: t('contact.portfolioDesc'),
      buttonText: t('contact.download')
    },
    {
      title: t('contact.blog'),
      url: 'https://yoo94.github.io/#/',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-500',
      description: t('contact.blogDesc'),
      buttonText: t('contact.visitSite')
    }
  ];

  return (
    <section id="contact" className="py-16 xs:py-20 px-4 xs:px-6 bg-white dark:bg-slate-900">
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
            className="text-3xl xs:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-6 xs:mb-8"
          >
            {t('contact.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16"
          >
            {t(
              'contact.subtitle'
            )}
          </motion.p>

          {/* Contact Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-6 mb-8 xs:mb-12">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.title}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-600 text-center group-hover:shadow-2xl transition-shadow">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <contact.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {contact.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {contact.description}
                  </p>
                  
                  <div className="flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                    <span className="text-sm font-medium">{contact.buttonText }</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Email Contact */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 text-center shadow-xl border border-gray-200 dark:border-gray-600"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('contact.emailTitle')}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t(
                'contact.emailDesc'
              )}
            </p>
            
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Mail className="w-5 h-5 mr-2" />
              {t('contact.sendEmail')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
      >
        <p className="text-center text-gray-600 dark:text-gray-400 mt-16">
          {t('contact.footer')}
        </p>
      </motion.div>
    </section>
  );
}
