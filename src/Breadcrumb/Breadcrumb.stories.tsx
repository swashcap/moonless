import React from 'react';

import { Breadcrumb } from './Breadcrumb';

export default {
  component: Breadcrumb,
  title: 'Component|Breadcrumb',
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
        href: '/page-2/page-3/',
        isCurrent: true,
        name: 'Page 3',
      },
    ]}
  />
);
