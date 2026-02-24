'use client';

import React from 'react';
import { Layout, Typography, Space } from 'antd';
import { useT } from './LocaleProvider';

const { Footer } = Layout;
const { Text } = Typography;

const AppFooter: React.FC = () => {
  const t = useT();

  return (
    <Footer style={{ textAlign: 'center', background: '#f0f2f5', padding: '24px 0' }}>
      <Space direction="vertical" size="small">
        <Text strong>2023 Yayo</Text>
        <Text italic type="secondary">
          {t('footer_made')}
        </Text>
      </Space>
    </Footer>
  );
};

export default AppFooter;
