'use client';

import { Row, Col, Divider, Typography } from 'antd';
import Image from 'next/image';
import styles from './Landing.module.css';

import Atlantia from '../../public/partners/atlantia_logo.svg';
import Azteca from '../../public/partners/azteca_logo.svg';
import Didi from '../../public/partners/didi_logo.svg';
import Interware from '../../public/partners/interware_logo.svg';
import Metlife from '../../public/partners/metlife_logo.svg';
import Monte from '../../public/partners/monte_logo.svg';
import Rappi from '../../public/partners/rappi_logo.svg';
import Uber from '../../public/partners/uber_logo.svg';
import Zurich from '../../public/partners/zurich_logo.svg';

const logos = [
  { src: Atlantia, alt: 'Atlantia.ai' },
  { src: Azteca, alt: 'Azteca' },
  { src: Didi, alt: 'Didi' },
  { src: Interware, alt: 'Interware' },
  { src: Metlife, alt: 'Metlife' },
  { src: Monte, alt: 'Monte' },
  { src: Rappi, alt: 'Rappi' },
  { src: Uber, alt: 'Uber' },
  { src: Zurich, alt: 'Zurich' },
];

const { Title } = Typography;

export default function LogoGrid() {
  return (
    <section className={styles.partners}>
      <Divider orientation="center" plain className={styles.partnersDivider}>
        <Title level={4}> Empresas con las que he trabajado</Title>
      </Divider>

      <Row wrap justify="space-evenly" gutter={[, 48]}>
        {logos.map((logo, i) => (
          <Col key={`${logo.alt}-${i}`}>
            <div className={styles.logoCard} role="img" aria-label={logo.alt}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={30}
                className={styles.logoImg}
                loading="lazy"
                style={{ margin: '16px 48px' }}
              />
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}
