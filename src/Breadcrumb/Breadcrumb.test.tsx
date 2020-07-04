import React from 'react';
import { render } from '@testing-library/react';

import { Breadcrumb } from './Breadcrumb';

describe('Breadcrumb', () => {
  test('It should render.', () => {
    const { container } = render(
      <Breadcrumb
        items={[
          {
            href: '/',
            name: 'Home',
          },
        ]}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
