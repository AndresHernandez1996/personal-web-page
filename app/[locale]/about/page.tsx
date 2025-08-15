'use client';
import { useT } from '@/components/LocaleProvider';
import Image from 'next/image';
import Skyline from '../../../public/images/skyline.png';
import LayoutContainer from '@/components/Ui/LayoutContainer';
import AboutMe from '@/components/About/AboutMe';

export default function LocaleLayout() {
  const t = useT();
  return (
    <LayoutContainer>
      <AboutMe />
    </LayoutContainer>
  );
}
