import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['ko', 'en'] as const;
export const localePrefix = 'always'; // 또는 'as-needed'

export const { Link, redirect, usePathname, useRouter } = 
  createSharedPathnamesNavigation({ locales, localePrefix });