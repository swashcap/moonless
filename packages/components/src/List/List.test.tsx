import React from 'react';
import { render } from '@testing-library/react';

import { List } from './List';

describe('List', () => {
  test('It should render.', () => {
    const { container } = render(<List />);

    expect(container).toMatchSnapshot();
  });
});
