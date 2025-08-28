'use client';

import React, { useState } from 'react';
import {
  DownOutlined,
  GithubOutlined,
  LinkedinFilled,
  MoreOutlined,
  MailOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Col, Row, Dropdown, Button, Space } from 'antd';
import Image from 'next/image';
import YayoLogo from '../public/yayo_logo.png';
import { useLocale, useT } from './LocaleProvider';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type MenuItem = Required<MenuProps>['items'][number];

const App: React.FC = () => {
  const [current, setCurrent] = useState('/');
  const locale = useLocale();
  const t = useT();
  const pathname = usePathname();
  const segments = pathname.split('/');
  const [, , ...rest] = segments;
  const restPath = rest.length > 0 ? `/${rest.join('/')}` : '/';

  const aboutLabel = t('navbar_about');
  // const experienceLabel = t('navbar_experience');
  // const contactLabel = t('navbar_contact');
  const langEsLabel = t('navbar_language_es');
  const langEnLabel = t('navbar_language_en');

  // Menu de escritorio (solo texto)
  const textItems: MenuItem[] = [
    { key: 'home', label: <Link href={`/${locale}/about`}>{aboutLabel}</Link> },
    // { key: 'about', label: <Link href={`/${locale}/experience`}>{experienceLabel}</Link> },
    // { key: 'dashboard', label: <Link href={`/${locale}/contact`}>{contactLabel}</Link> },
  ];

  // Menú compacto (móvil)
  const compactItems: MenuItem[] = [
    ...textItems,
    {
      key: 'email',
      label: <a href="mailto:andrse@demo.com?subject=Consulta%20desde%20tu%20portafolio">Email</a>,
    },
    {
      key: 'github',
      label: (
        <a href="https://github.com/AndresHernandez1996" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      ),
    },
    {
      key: 'linkedin',
      label: (
        <a
          href="https://www.linkedin.com/in/andreshidalgo-datascientist/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      ),
    },
    {
      label: <>{locale.toUpperCase()}</>,
      key: 'language',
      children: [
        { key: 'es', label: <Link href={`/es${restPath}`}>{langEsLabel}</Link> },
        { key: 'en', label: <Link href={`/en${restPath}`}>{langEnLabel}</Link> },
      ],
    },
  ];

  const onClick: MenuProps['onClick'] = (e) => setCurrent(e.key);

  const langMenu: MenuProps['items'] = [
    { key: 'es', label: <Link href={`/es${restPath}`}>{langEsLabel}</Link> },
    { key: 'en', label: <Link href={`/en${restPath}`}>{langEnLabel}</Link> },
  ];

  const compactMenu = (
    <Dropdown
      placement="bottomRight"
      trigger={['click']}
      menu={{ items: compactItems, onClick }}
      arrow
    >
      <Button type="text" aria-label="Open menu">
        <MoreOutlined style={{ fontSize: 20 }} />
      </Button>
    </Dropdown>
  );

  return (
    <>
      <div className="nav-mobile">
        <Row align="middle">
          <Col xs={8} />
          <Col xs={8} style={{ display: 'flex', justifyContent: 'center' }}>
            <Link
              href={`/${locale}/`}
              onClick={() => setCurrent('/')}
              style={{ display: 'inline-block' }}
            >
              <Image src={YayoLogo} alt="Yayo Logo" width={50} height={50} />
            </Link>
          </Col>
          <Col xs={8} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            {compactMenu}
          </Col>
        </Row>
      </div>
      <div className="nav-desktop">
        <Row align="middle" wrap={false} style={{ width: '100%' }}>
          <Col flex="none" style={{ display: 'flex', alignItems: 'center' }}>
            <Link href={`/${locale}/`} style={{ display: 'inline-block' }}>
              <Image
                src={YayoLogo}
                onClick={() => setCurrent('/')}
                alt="Yayo Logo"
                width={50}
                height={50}
              />
            </Link>
          </Col>

          <Col flex="auto" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Menu
              mode="horizontal"
              onClick={onClick}
              selectedKeys={[current]}
              items={textItems}
              style={{ borderBottom: 'none' }}
            />
          </Col>

          <Col flex="none" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Space size="large" align="center">
              <a
                href="mailto:andrse@demo.com?subject=Consulta%20desde%20tu%20portafolio"
                aria-label="Email"
              >
                <MailOutlined style={{ color: '#d93025', fontSize: 18 }} />
              </a>
              <a
                href="https://github.com/AndresHernandez1996"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubOutlined style={{ color: '#333', fontSize: 18 }} />
              </a>
              <a
                href="https://www.linkedin.com/in/andreshidalgo-datascientist/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinFilled style={{ color: '#0077b5', fontSize: 18 }} />
              </a>

              <Dropdown menu={{ items: langMenu }} placement="bottomRight" arrow>
                <Button type="text" aria-label="Language">
                  {locale.toUpperCase()} <DownOutlined />
                </Button>
              </Dropdown>
            </Space>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default App;
