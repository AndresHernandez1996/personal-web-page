'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Dropdown, Button, MenuProps, Drawer, Grid } from 'antd';
import { MenuOutlined, DownOutlined } from '@ant-design/icons';
const { useBreakpoint } = Grid;
import { useLocale, t } from './LocaleProvider';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const locale = useLocale();
  const pathname = usePathname();
  const segments = pathname.split('/');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [, , ...rest] = segments;
  const restPath = rest.length > 0 ? `/${rest.join('/')}` : '/';

  const menuItems = [
    { key: 'home', label: <Link href={`/${locale}`}>{t('navbar_about')}</Link> },
    { key: 'about', label: <Link href={`/${locale}/about`}>{t('navbar_experience')}</Link> },
    { key: 'dashboard', label: <Link href={`/${locale}/dashboard`}>{t('navbar_contact')}</Link> },
  ];

  const languages: MenuProps['items'] = [
    { key: 'es', label: <Link href={`/es${restPath}`}>ES</Link> },
    { key: 'en', label: <Link href={`/en${restPath}`}>EN</Link> },
  ];

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '64px', width: '100%' }}>
      <div style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', marginRight: 'auto' }}>
        <Link href={`/${locale}`} style={{ color: 'inherit' }}>
          {t('welcome_message')}
        </Link>
      </div>
      {!isMobile && (
        <Menu
          theme="light"
          mode="horizontal"
          selectable={false}
          items={menuItems}
          style={{ lineHeight: '64px' }}
        />
      )}
      <Dropdown menu={{ items: languages }} trigger={['hover']}>
        <Button type="primary">
          {locale.toUpperCase()} <DownOutlined />
        </Button>
      </Dropdown>
      {isMobile && (
        <>
          <Button
            icon={<MenuOutlined />}
            type="primary"
            onClick={() => setDrawerOpen(true)}
          />
          <Drawer
            title="Menú"
            placement="right"
            onClose={() => setDrawerOpen(false)}
            open={drawerOpen}
          >
            <Menu
              mode="vertical"
              items={menuItems}
              onClick={() => setDrawerOpen(false)}
            />
          </Drawer>
        </>
      )}
    </div>
  );
}
