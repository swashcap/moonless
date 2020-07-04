import React from 'react';
import { render } from '@testing-library/react';

import { Card } from './Card';

describe('Card', () => {
  test('It should render.', () => {
    const { container } = render(<Card>Card</Card>);

    expect(container).toMatchSnapshot();
  });
});
