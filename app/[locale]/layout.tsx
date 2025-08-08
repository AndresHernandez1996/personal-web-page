import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { ConfigProvider, theme } from 'antd';
import LocaleProvider from '@/components/LocaleProvider';
import Header from '@/components/Header';
import esMessages from '@/locales/es/common.json';
import enMessages from '@/locales/en/common.json';

export const generateStaticParams = () => [{ locale: 'es' }, { locale: 'en' }];

export default function LocaleLayout({
  params,
  children,
}: {
  params: { locale: string };
  children: ReactNode;
}) {
  const { locale } = params;
  const messages = locale === 'es' ? esMessages : locale === 'en' ? enMessages : null;

  if (!messages) return notFound();

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#739e55',
          colorSuccess: '#FFD700',
          colorInfo: '#4B7BE5',
          colorWarning: '#FFA500',
          colorError: '#D7263D',
          fontFamily: 'Geist, var(--font-geist-sans), var(--font-geist-mono), sans-serif',
          borderRadius: 8,
        },

        components: {
          Button: {
            colorPrimary: '#739e55',
            borderRadius: 8,
          },
          Menu: {
            colorPrimary: '#739e55',
            itemBorderRadius: 8,
          },
        },
      }}
    >
      <LocaleProvider locale={locale} messages={messages}>
        <Header />
        <main>{children}</main>
      </LocaleProvider>
    </ConfigProvider>
  );
}
