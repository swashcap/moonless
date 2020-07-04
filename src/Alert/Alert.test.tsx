import React from 'react';
import { render } from '@testing-library/react';

import { Alert } from './Alert';

describe('Alert', () => {
  test('It should render.', () => {
    const { container } = render(<Alert>Alert</Alert>);

    expect(container).toMatchSnapshot();
  });
});
