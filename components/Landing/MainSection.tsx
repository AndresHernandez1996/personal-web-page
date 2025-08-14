'use client';

import { Row, Col, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Image, { type StaticImageData } from 'next/image';
import styles from './Landing.module.css';
import Yayo_pic from '../../public/images/yayo_landing.jpeg';

type MainSectionProps = {
  title?: string;
  intro?: string;
  /** Ruta pública del PDF en /public */
  cvHref?: string;
  /** Ruta pública de la foto en /public */
  photoSrc?: StaticImageData | string;
};

export default function MainSection({
  title = '¡Hola! Soy Andrés Hernández',
  intro = 'Data Scientist Jr + Frontend (React/Next.js). Convierto datos en producto: análisis, modelado y visualización orientados a decisiones claras y UIs accesibles, con Python/SQL, EDA y métricas/dashboards.',
  cvHref = '/cv/andres-hernandez-cv.pdf',
  photoSrc = Yayo_pic,
}: MainSectionProps) {
  return (
    <section className={styles.mainSection}>
      <Row gutter={[32, 32]} align="middle" justify="space-between" wrap>
        {/* Texto */}
        <Col xs={24} md={14}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroIntro}>{intro}</p>

          <a href={cvHref} download className={styles.cvLink} aria-label="Descargar CV">
            <Button type="primary" size="large" icon={<DownloadOutlined />}>
              Descargar CV
            </Button>
          </a>
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
