import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { ConfigProvider, theme } from 'antd';
import LocaleProvider from '@/components/LocaleProvider';
import AntdRegistry from '@/components/AntdRegistry';
import Header from '@/components/Header';
import esMessages from '@/locales/es/common.json';
import enMessages from '@/locales/en/common.json';
import Layout, { Content } from 'antd/es/layout/layout';
import AppFooter from '@/components/Footer';

export const generateStaticParams = () => [{ locale: 'es' }, { locale: 'en' }];

export default async function LocaleLayout({
  params,
  children,
}: {
  params: { locale: string };
  children: ReactNode;
}) {
  const { locale } = await params;
  const messages = locale === 'es' ? esMessages : locale === 'en' ? enMessages : null;

  if (!messages) return notFound();

  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            colorPrimary: '#739e55',
            colorSuccess: '#FFD700',
            colorInfo: '#4B7BE5',
            colorWarning: '#FFA500',
            colorError: '#D7263D',
            fontFamily: 'var(--font-host-sans)',
            fontSize: 16,
          },
        }}
      >
        <LocaleProvider locale={locale} messages={messages}>
          <Layout>
            <Header />
            <Content className="main-container">{children}</Content>
            <AppFooter />
          </Layout>
        </LocaleProvider>
      </ConfigProvider>
    </AntdRegistry>
  );
}
