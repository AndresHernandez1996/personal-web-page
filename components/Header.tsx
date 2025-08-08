'use client';

import React from 'react';
import { Layout } from 'antd';
import NavbarDesktop from './Navbar';

const { Header: AntHeader } = Layout;

export default function Header() {
  return (
    <AntHeader style={{ padding: 0, background: 'transparent' }}>
      <NavbarDesktop />
    </AntHeader>
  );
}
