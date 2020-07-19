import React from 'react';
import { render } from '@testing-library/react';

import { Card } from './Card';

describe('Card', () => {
  test('It should render.', () => {
    const { container } = render(<Card>Card</Card>);

    expect(container).toMatchSnapshot();
  });

  test('It should pass className property.', () => {
    const { getByTestId } = render(
      <Card className="test" data-testid="card" />
    );

    expect(getByTestId('card')).toHaveClass('test');
  });

  test('It should spread properties to the root element.', () => {
    const { getByTestId } = render(
      <Card data-sup="hi" data-testid="card" role="group" />
    );
    const card = getByTestId('card');

    expect(card).toHaveAttribute('data-sup', 'hi');
    expect(card).toHaveAttribute('role', 'group');
  });
});
