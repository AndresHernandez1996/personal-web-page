'use client';

import React from 'react';
import { Layout } from 'antd';
import Navbar from './Navbar';

const { Header: AntHeader } = Layout;

export default function Header() {
  return (
    <AntHeader
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        background: '#ffffff',
        padding: '0 16px',
      }}
    >
      <Navbar />
    </AntHeader>
  );
}
