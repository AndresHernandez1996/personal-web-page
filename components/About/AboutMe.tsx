import React from 'react';
import Image from 'next/image';
import Skyline from '../../public/images/skyline.png';
// import { useT } from '@/components/LocaleProvider';
import styles from './AboutMe.module.css';
import { Col, Row } from 'antd';

const AboutMe: React.FC = () => {
  //   const t = useT();

  return (
    <>
      <section className={styles.mainSection}>
        <Row gutter={[32, 32]} align="middle" justify="space-between" wrap>
          <Col xs={24} md={14}>
            <h1 className={styles.heroTitle}>
              {/* {t('landing_greeting')} */}
              Acerca de mí
            </h1>
            <p className={styles.heroIntro}>
              {/* {t('landing_title')} */}
              Hola que tal, soy Andrés Hidalgo, un apasionado de la ciencia de datos y el
              aprendizaje automático. Me encanta resolver problemas complejos y crear soluciones
              innovadoras que marquen la diferencia.
            </p>
          </Col>
        </Row>
      </section>
      <Image src={Skyline} alt="City Skyline" style={{ width: '100%', height: 'auto' }} />
      <section className={styles.darkSection}>
        hoal
        <Row gutter={[32, 32]} align="middle" justify="space-between" wrap>
          <Col xs={24} md={14}>
            <h1 className={styles.heroTitle}>
              {/* {t('landing_greeting')} */}
              Acerca de mí
            </h1>
            <p className={styles.heroIntro}>
              {/* {t('landing_title')} */}
              Hola que tal, soy Andrés Hidalgo, un apasionado de la ciencia de datos y el
              aprendizaje automático. Me encanta resolver problemas complejos y crear soluciones
              innovadoras que marquen la diferencia.
            </p>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default AboutMe;
