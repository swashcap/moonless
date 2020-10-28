import React from 'react';

import { Text } from './Text';

export default {
  title: 'Component/Text',
};

export const Default = () => <Text>Text</Text>;

export const As = () => (
  <>
    <Text as="h1">h1</Text>
    <Text as="h2">h2</Text>
    <Text as="p">p</Text>
    <Text as="small">small</Text>
  </>
);

export const Variant = () => (
  <>
    <Text as="h1" variant="title">
      title
    </Text>
    <Text as="h2" variant="headline-1">
      headline-1
    </Text>
    <Text as="h3" variant="headline-2">
      headline-2
    </Text>
    <Text as="h4" variant="headline-3">
      headline-3
    </Text>
    <Text as="h5" variant="subhead-1">
      subhead-1
    </Text>
    <Text as="h6" variant="subhead-2">
      subhead-2
    </Text>
    <Text as="p" variant="body">
      body
    </Text>
    <Text as="small" variant="caption">
      caption
    </Text>
  </>
);
