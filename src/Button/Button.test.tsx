import React from 'react';
import { render } from '@testing-library/react';

import { PrimaryButton, SecondaryButton } from './Button';

describe('Button', () => {
  describe('PrimaryButton', () => {
    test('It should render.', () => {
      const { container } = render(<PrimaryButton>Button</PrimaryButton>);

      expect(container).toMatchSnapshot();
    });
  });

  describe('SecondaryButton', () => {
    test('It should render.', () => {
      const { container } = render(<SecondaryButton>Button</SecondaryButton>);

      expect(container).toMatchSnapshot();
    });
  });
});
