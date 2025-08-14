'use client';
import Partners from '@/components/Landing/Partners';
import MainSection from '@/components/Landing/MainSection';
import LayoutContainer from '@/components/Ui/LayoutContainer';

export default function HomePage() {
  return (
    <LayoutContainer>
      <MainSection />
      <Partners />
    </LayoutContainer>
  );
}
