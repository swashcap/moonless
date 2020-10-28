import React from 'react';
import { render } from '@testing-library/react';

import { Text } from './Text';

describe('Text', () => {
  test('It should render.', () => {
    const { container } = render(<Text>Text</Text>);

    expect(container).toMatchSnapshot();
  });
});
