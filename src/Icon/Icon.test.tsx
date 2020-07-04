import React from 'react';
import { render } from '@testing-library/react';

import { CheckIcon, XIcon } from './Icon';

describe('Icon', () => {
  describe('CheckIcon', () => {
    test('It should render.', () => {
      const { container } = render(<CheckIcon />);

      expect(container).toMatchSnapshot();
    });
  });

  describe('XIcon', () => {
    test('It should render.', () => {
      const { container } = render(<XIcon />);

      expect(container).toMatchSnapshot();
    });
  });
});
