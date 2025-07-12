'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/language';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 xs:pt-20 px-4 xs:px-6">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 xs:space-y-8"
        >
          {/* Greeting */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white"
          >
            {t('hero.greeting')}
          </motion.h1>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-lg xs:text-xl sm:text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold">
              {t('hero.title')}
            </p>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200">
              {t('hero.name')}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base xs:text-lg sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-5xl mx-auto leading-relaxed"
          >
            {t(
              'hero.description'
            )}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base xs:text-lg sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-5xl mx-auto leading-relaxed"
          >
            {t(
              'hero.description2'
            )}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base xs:text-lg sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-5xl mx-auto leading-relaxed"
          >
            {t(
              'hero.description3'
            )}
          </motion.p>

          {/* Floating Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative"
          >
            {/* Animated Background Elements */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-10 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20"
            />
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-10 right-10 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20"
            />
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col xs:flex-col sm:flex-row gap-3 xs:gap-4 sm:gap-4 justify-center items-center mt-12"
            >
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full xs:w-auto px-6 xs:px-8 py-3 xs:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors text-center min-h-[48px] flex items-center justify-center"
              >
                {t('hero.learnMore')}
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full xs:w-auto px-6 xs:px-8 py-3 xs:py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-colors text-center min-h-[48px] flex items-center justify-center"
              >
                {t('hero.contact')}
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-600" />
        </motion.div>
      </div>
    </section>
  );
}
