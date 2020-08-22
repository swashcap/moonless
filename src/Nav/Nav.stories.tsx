import React from 'react';

import { Nav } from './Nav';

export default {
  component: Nav,
  title: 'Component/Nav',
};

export const Default = () => <Nav />;

export const WithItems = () => (
  <Nav>
    <Nav.Item href="#/">Home</Nav.Item>
    <Nav.Item href="#/page-2/">Page 2</Nav.Item>
    <Nav.Item href="#/page-3/" isCurrent>
      Page 3
    </Nav.Item>
  </Nav>
);
