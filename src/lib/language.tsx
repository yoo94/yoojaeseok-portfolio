'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  locale: 'ko' | 'en';
  language: 'ko' | 'en'; // 추가
  setLocale: (locale: 'ko' | 'en') => void;
  toggleLanguage: () => void; // 추가
  t: (ko: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'ko',
  language: 'ko', // 추가
  setLocale: () => {},
  toggleLanguage: () => {}, // 추가
  t: (ko: string) => ko,
});

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<'ko' | 'en'>('ko');

  const toggleLanguage = () => {
    setLocale(prev => prev === 'ko' ? 'en' : 'ko');
  };

  const t = (ko: string, en: string) => {
    return locale === 'ko' ? ko : en;
  };

  return (
    <LanguageContext.Provider value={{ 
      locale, 
      language: locale, // locale과 동일하게 설정
      setLocale, 
      toggleLanguage,
      t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}