import React from 'react';
import { render } from '@testing-library/react';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  test('It should render.', () => {
    const { container } = render(<Checkbox />);

    expect(container).toMatchSnapshot();
  });
});
