'use client';

import React from 'react';
import { Layout, Typography, Space } from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

const AppFooter: React.FC = () => (
  <Footer style={{ textAlign: 'center', background: '#f0f2f5', padding: '24px 0' }}>
    <Space direction="vertical" size="small">
      <Text strong>© {new Date().getFullYear()} Yayo</Text>
      <Text italic type="secondary">
        Desarrollado con React, NextJs, Ant Design & ❤️
      </Text>
    </Space>
  </Footer>
);

export default AppFooter;
