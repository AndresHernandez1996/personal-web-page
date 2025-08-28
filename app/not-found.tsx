'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button, Col, Row } from 'antd';
import Question from '../public/images/question_mark.png';

export default function NotFound() {
  return (
    <Row
      gutter={[32, 32]}
      align="middle"
      justify="space-evenly"
      style={{
        minHeight: '100vh', // ocupa toda la altura de la pantalla
        textAlign: 'center',
      }}
    >
      {/* Imagen */}
      <Col xs={24}>
        <Image
          src={Question}
          alt="Not found"
          style={{ width: 'min(420px, 80vw)', height: 'auto' }}
          sizes="(max-width: 768px) 80vw, 420px"
          priority
        />
        <h1 style={{ margin: '24px 0' }}>Missing something?</h1>
        <Link href="/">
          <Button
            type="primary"
            style={{
              width: '200px',
              height: '50px',
              fontWeight: 300,
              borderRadius: '10px',
              backgroundColor: '#3c4c44',
              borderColor: '#3c4c44',
              fontSize: '24px',
            }}
          >
            Go home
          </Button>
        </Link>
      </Col>
    </Row>
  );
}
