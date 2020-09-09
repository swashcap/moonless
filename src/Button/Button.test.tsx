import React from 'react';
import { render } from '@testing-library/react';

import { ButtonSize, PrimaryButton, SecondaryButton } from './Button';

describe('Button', () => {
  describe.each([
    ['PrimaryButton', PrimaryButton],
    ['SecondaryButton', SecondaryButton],
  ])('%s', (name, Component) => {
    test('It should render.', () => {
      const { container } = render(<Component>Button</Component>);

      expect(container).toMatchSnapshot();
    });

    test('It should spread properties to the root element', () => {
      const { getByRole } = render(
        <Component className="test1" data-testid="test2">
          Test 3
        </Component>
      );

      const button = getByRole('button');

      expect(button).toHaveClass('test1');
      expect(button).toHaveAttribute('data-testid', 'test2');
      expect(button.textContent).toBe('Test 3');
    });

    test('It should render as an anchor', () => {
      const { getByRole } = render(
        <Component as="a" href="http://example.com">Go to example</Component>
      );

      expect(getByRole('link')).toHaveAttribute('href', 'http://example.com');
    });

    test.each<ButtonSize>(['small', 'medium', 'large'])(
      'It should render size %s.',
      (size) => {
        const { getByRole } = render(<Component size={size}>Button</Component>);

        expect(getByRole('button')).toHaveClass(
          `Button${size.replace(/(\w)/, (x) => x.toUpperCase())}`
        );
      }
    );

    test('It should forward ref.', () => {
      const ref = React.createRef<HTMLButtonElement>();
      const { getByRole } = render(<Component ref={ref}>Button</Component>);

      expect(getByRole('button')).toBe(ref.current);
    });
  });
});
