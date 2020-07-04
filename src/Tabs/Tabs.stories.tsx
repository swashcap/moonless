import React from 'react';

import { Tabs } from './Tabs';

export default {
  component: Tabs,
  title: 'Tabs',
};

export const Default = () => <Tabs items={[]} />;

export const WithContent = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <Tabs
      activeItemIndex={index}
      items={['One', 'Two', 'Three']}
      onChange={(event, index) => setIndex(index)}
    >
      {`Active index: ${index}`}
    </Tabs>
  );
};
