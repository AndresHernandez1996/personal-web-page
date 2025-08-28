import React from 'react';
import Image from 'next/image';
import AboutOne from '../../public/images/about_1.jpeg';
import AboutTwo from '../../public/images/about_2.jpeg';
import AboutThree from '../../public/images/about_3.jpeg';
import AboutFour from '../../public/images/about_4.jpeg';
import AboutFive from '../../public/images/about_5.jpeg';
import Me from '../../public/images/about_8.jpg';
import Mnstera from '../../public/images/random_facts_img.jpeg';
import { useT } from '@/components/LocaleProvider';

import styles from './AboutMe.module.css';
import { Col, Divider, Row } from 'antd';

const AboutMe: React.FC = () => {
  const t = useT();

  const images = [
    { src: AboutOne, alt: 'About me image 1' },
    { src: AboutThree, alt: 'About me image 2' },
    { src: AboutTwo, alt: 'About me image 3' },
    { src: AboutFour, alt: 'About me image 4' },
    { src: AboutFive, alt: 'About me image 5' },
    // { src: AboutSix, alt: 'About me image 6' },
  ];

  const skills = [
    {
      src: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
      alt: 'Python',
    },
    {
      src: 'https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white',
      alt: 'NumPy',
    },
    {
      src: 'https://img.shields.io/badge/pandas-150458?style=for-the-badge&logo=pandas&logoColor=white',
      alt: 'pandas',
    },
    {
      src: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white',
      alt: 'JavaScript',
    },
    {
      src: 'https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white',
      alt: 'TypeScript',
    },
    {
      src: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white',
      alt: 'React',
    },
    {
      src: 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white',
      alt: 'Next.js',
    },
    {
      src: 'https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white',
      alt: 'Redux',
    },
    {
      src: 'https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white',
      alt: 'Tailwind CSS',
    },
    {
      src: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      alt: 'HTML5',
    },
    {
      src: 'https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white',
      alt: 'scikit-learn',
    },
    {
      src: 'https://img.shields.io/badge/LightGBM-00A35F?style=for-the-badge&logo=lightgbm&logoColor=white',
      alt: 'LightGBM',
    },
    {
      src: 'https://img.shields.io/badge/CatBoost-EE428D?style=for-the-badge&logo=catboost&logoColor=white',
      alt: 'CatBoost',
    },
    {
      src: 'https://img.shields.io/badge/XGBoost-023E8A?style=for-the-badge&logo=xgboost&logoColor=white',
      alt: 'XGBoost',
    },
    {
      src: 'https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge&logo=matplotlib&logoColor=white',
      alt: 'Matplotlib',
    },
    {
      src: 'https://img.shields.io/badge/Seaborn-4C78A8?style=for-the-badge&logo=seaborn&logoColor=white',
      alt: 'Seaborn',
    },
    {
      src: 'https://img.shields.io/badge/Plotly-3F4F75?style=for-the-badge&logo=plotly&logoColor=white',
      alt: 'Plotly',
    },
    {
      src: 'https://img.shields.io/badge/Streamlit-FF4E30?style=for-the-badge&logo=streamlit&logoColor=white',
      alt: 'Streamlit',
    },
    {
      src: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      alt: 'CSS3',
    },
    {
      src: 'https://img.shields.io/badge/Ant%20Design-0170FE?style=for-the-badge&logo=ant-design&logoColor=white',
      alt: 'Ant Design',
    },
    {
      src: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white',
      alt: 'Git',
    },
    {
      src: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white',
      alt: 'GitHub',
    },
    {
      src: 'https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white',
      alt: 'VS Code',
    },
    {
      src: 'https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white',
      alt: 'Jupyter',
    },
    {
      src: 'https://img.shields.io/badge/Anaconda-44A833?style=for-the-badge&logo=anaconda&logoColor=white',
      alt: 'Anaconda',
    },
    {
      src: 'https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white',
      alt: 'Webpack',
    },
    {
      src: 'https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white',
      alt: 'Jest',
    },
    {
      src: 'https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white',
      alt: 'ESLint',
    },
  ];

  const randomFacts = [
    'about_random_fact_one',
    'about_random_fact_two',
    'about_random_fact_three',
    'about_random_fact_four',
    'about_random_fact_five',
    'about_random_fact_six',
  ];

  return (
    <>
      <section className={styles.mainSection}>
        <Row gutter={[32, 32]} align="middle" justify="space-between" wrap>
          <Col xs={24} md={12}>
            <p className={styles.heroTitle}>{t('about_title')}</p>
            <p className={styles.heroSubtitle}>{t('about_subtitle')}</p>
            <p className={styles.heroIntro}>{t('about_description')}</p>
          </Col>
          <Col xs={24} md={10} className={styles.photoCol}>
            <div className={styles.photoWrap}>
              <Image
                src={Me}
                alt="Andres_Hernandez_pic"
                width={360}
                height={360}
                className={styles.photo}
                priority
                sizes="(max-width: 767px) 70vw, 360px"
              />
            </div>
          </Col>
        </Row>
        <Divider />
        <Row gutter={[24, 24]} align="middle" justify="space-evenly" wrap>
          {images.map((image, index) => (
            <Col key={index} xs={24} sm={8} md={6} lg={4}>
              <Image
                src={image.src}
                alt={image.alt}
                className={styles.carouselImage}
                loading="lazy"
              />
            </Col>
          ))}
        </Row>
      </section>
      <section className={styles.darkSection}>
        <p className={styles.skills}>{t('about_skills')}</p>
        <Row justify="center">
          {skills.map((image) => (
            <img
              decoding="async"
              key={image.alt}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              height={35}
            />
          ))}
        </Row>
      </section>
      <section className={styles.mainSection}>
        <p className={styles.skills}>{t('about_random_facts_title')}</p>
        <Row gutter={[24, 24]} align="middle" justify="center" wrap>
          <Col lg={12} md={24} sm={24} xs={24} style={{ textAlign: 'center' }}>
            <Image
              src={Mnstera}
              alt="Monstera"
              className={styles.monstera}
              loading="lazy"
              sizes="(max-width: 767px) 90vw, 400px"
              width={400}
              height={400}
            />
          </Col>
          <Col lg={12} md={24} sm={24} xs={24}>
            {randomFacts.map((fact, index) => (
              <div className={styles.factItem} key={`${index}-${fact}`}>
                {t(fact)}
              </div>
            ))}
          </Col>
        </Row>
      </section>
    </>
  );
};

export default AboutMe;
