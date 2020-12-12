import { render } from '@testing-library/react';

import { Tabs } from './Tabs';

describe('Tabs', () => {
  test('It should render.', () => {
    const { container } = render(
      <Tabs onChange={jest.fn()} items={[]}>
        Tabs
      </Tabs>
    );

    expect(container).toMatchSnapshot();
  });
});
