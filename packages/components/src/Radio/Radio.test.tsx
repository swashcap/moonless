import React from 'react';
import { render } from '@testing-library/react';

import { Radio } from './Radio';

describe('Radio', () => {
  test('It should render.', () => {
    const { container } = render(<Radio />);

    expect(container).toMatchSnapshot();
  });
});
