import React from 'react';
import { render } from '@testing-library/react';

import { Grid } from './Grid';

describe('Grid', () => {
  test('It should render.', () => {
    const { container } = render(<Grid />);

    expect(container).toMatchSnapshot();
  });
});
