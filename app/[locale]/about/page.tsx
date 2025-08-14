'use client';
import { useT } from '@/components/LocaleProvider';

export default function LocaleLayout() {
  const t = useT();
  return <h1>{t('navbar_about')}</h1>;
}
