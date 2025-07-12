'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import koMessages from '../../messages/ko.json';
import enMessages from '../../messages/en.json';

// Create a union type that works with both message structures
type KoMessages = typeof koMessages;
type EnMessages = typeof enMessages;
type Messages = KoMessages | EnMessages;

interface LanguageContextType {
  locale: 'ko' | 'en';
  language: 'ko' | 'en';
  setLocale: (locale: 'ko' | 'en') => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  messages: Messages;
}

const messages = {
  ko: koMessages,
  en: enMessages
};

const LanguageContext = createContext<LanguageContextType>({
  locale: 'ko',
  language: 'ko',
  setLocale: () => {},
  toggleLanguage: () => {},
  t: (key: string) => key,
  messages: koMessages,
});

export const useLanguage = () => useContext(LanguageContext);

// Helper function to get nested object value by key path
function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const result = path.split('.').reduce((current: unknown, key) => {
    if (current && typeof current === 'object' && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
  return typeof result === 'string' ? result : path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<'ko' | 'en'>('ko');

  const toggleLanguage = () => {
    setLocale(prev => prev === 'ko' ? 'en' : 'ko');
  };

  const t = (key: string) => {
    return getNestedValue(messages[locale], key);
  };

  return (
    <LanguageContext.Provider value={{ 
      locale, 
      language: locale,
      setLocale, 
      toggleLanguage,
      t,
      messages: messages[locale]
    }}>
      {children}
    </LanguageContext.Provider>
  );
}