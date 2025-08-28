'use client';

import { Row, Col, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Image, { type StaticImageData } from 'next/image';
import styles from './Landing.module.css';
import { useT } from '@/components/LocaleProvider';
import Yayo_pic from '../../public/images/yayo_landing.jpeg';

type MainSectionProps = {
  title?: string;
  intro?: string;
  /** Ruta pública del PDF en /public */
  cvHref?: string;
  photoSrc?: StaticImageData | string;
};

export default function MainSection({ photoSrc = Yayo_pic }: MainSectionProps) {
  const t = useT();

  return (
    <section className={styles.mainSection}>
      <Row gutter={[32, 32]} align="middle" justify="space-between" wrap>
        {/* Texto principal */}
        <Col xs={24} md={14}>
          <h1 className={styles.heroTitle}>{t('landing_greeting')}</h1>
          <p className={styles.heroIntro}>{t('landing_title')}</p>

          <Button
            target="_blank"
            href="https://drive.google.com/file/d/1FMz40cvIyLs5kweCUPcOExSgZtLV7OIG/view?usp=sharing"
            type="primary"
            size="large"
            icon={<DownloadOutlined />}
          >
            {t('landing_download_resume')}
          </Button>
        </Col>

        {/* Foto */}
        <Col xs={24} md={10} className={styles.photoCol}>
          <div className={styles.photoWrap}>
            <Image
              src={photoSrc}
              alt="Andres_Hernandez_picture"
              width={360}
              height={360}
              className={styles.photo}
              priority
              sizes="(max-width: 767px) 70vw, 360px"
            />
          </div>
        </Col>
      </Row>
    </section>
  );
}
