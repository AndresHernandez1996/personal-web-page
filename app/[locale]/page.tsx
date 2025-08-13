'use client';
import { t } from '@/components/LocaleProvider';

export default function HomePage() {
  return (
    <main>
      <h1>{t('welcome_message')} Landing page</h1>
    </main>
  );
}
