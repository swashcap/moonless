import { useState } from 'react';

import { Tabs } from './Tabs';

export default {
  component: Tabs,
  title: 'Component/Tabs',
};

export const Default = () => <Tabs onChange={console.log} items={[]} />;

export const WithContent = () => {
  const [index, setIndex] = useState(0);

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
