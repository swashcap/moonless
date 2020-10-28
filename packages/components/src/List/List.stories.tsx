import React from 'react';

import { List } from './List';

export default {
  component: List,
  title: 'Component/List',
};

export const Default = () => <List />;

export const WithItems = () => (
  <List>
    <List.Item>1</List.Item>
    <List.Item>2</List.Item>
    <List.Item>3</List.Item>
  </List>
);
