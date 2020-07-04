import React from 'react';

import { Breadcrumb } from './Breadcrumb';

export default {
  component: Breadcrumb,
  title: 'Breadcrumb',
};

export const Default = () => (
  <Breadcrumb
    items={[
      {
        href: '/',
        name: 'Home',
      },
      {
        href: '/page-2/',
        name: 'Page 2',
      },
      {
        current: true,
        href: '/page-2/page-3/',
        name: 'Page 3',
      },
    ]}
  />
);
