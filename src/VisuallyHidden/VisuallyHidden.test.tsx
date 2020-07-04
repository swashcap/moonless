import React from 'react';
import { render } from '@testing-library/react';

import { VisuallyHidden } from './VisuallyHidden';

describe('VisuallyHidden', () => {
  test('It should render.', () => {
    const { container } = render(
      <VisuallyHidden>VisuallyHidden</VisuallyHidden>
    );

    expect(container).toMatchSnapshot();
  });

  test('It should pass className property.', () => {
    const { getByTestId } = render(
      <VisuallyHidden className="custom-class" data-testid="visuallyhidden">
        VisuallyHidden
      </VisuallyHidden>
    );

    expect(getByTestId('visuallyhidden')).toHaveClass('custom-class');
  });

  test('It should pass isFocusable property.', () => {
    const { getByTestId } = render(
      <VisuallyHidden data-testid="visuallyhidden" isFocusable>
        VisuallyHidden
      </VisuallyHidden>
    );

    expect(getByTestId('visuallyhidden')).toHaveClass(
      'VisuallyHiddenFocusable'
    );
  });
});
