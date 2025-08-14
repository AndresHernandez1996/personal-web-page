'use client';
import { useT } from '@/components/LocaleProvider';

export default function HomePage() {
  const t = useT();
  return (
    <main>
      <h1>{t('welcome_message')} Landing page</h1>
    </main>
  );
}
