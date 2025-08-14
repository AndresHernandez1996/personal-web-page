import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
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

  return <h1>About me</h1>;
}
