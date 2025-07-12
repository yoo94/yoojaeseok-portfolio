import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/lib/language';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jaeseok Yoo - Frontend Developer',
  description: 'Portfolio of Jaeseok Yoo, Frontend Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${inter.className} antialiased bg-white dark:bg-slate-900`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}