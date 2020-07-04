import React from 'react';

import { Tag } from './Tag';

export default {
  component: Tag,
  title: 'Tag',
};

export const Default = () => <Tag>Tag</Tag>;

export const Variant = () => (
  <>
    <Tag variant="primary">primary</Tag>
    <Tag variant="secondary">secondary</Tag>
  </>
);
