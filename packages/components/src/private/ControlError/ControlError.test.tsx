import React from 'react';
import { render } from '@testing-library/react';

import { ControlError } from './ControlError';

describe('ControlError', () => {
  test('It should render.', () => {
    const { container } = render(<ControlError>Control error</ControlError>);

    expect(container).toMatchSnapshot();
  });
});
