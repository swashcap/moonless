import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Alert, AlertVariant } from './Alert';

describe('Alert', () => {
  test('It should render.', () => {
    const { container } = render(<Alert>Alert</Alert>);

    expect(container).toMatchSnapshot();
  });

  test('It should render an element with role "alert".', () => {
    const { getByRole } = render(<Alert>Alert</Alert>);

    expect(getByRole('alert')).toBeTruthy();
  });

  test('It should pass children property.', () => {
    const { getByText } = render(<Alert>This is an alert!</Alert>);

    expect(getByText('This is an alert!')).toBeTruthy();
  });

  test('It should pass className property.', () => {
    const { getByRole } = render(<Alert className="test">Alert</Alert>);

    expect(getByRole('alert')).toHaveClass('test');
  });

  test('It should spread properties to the root element.', () => {
    const { getByRole } = render(
      <Alert data-bad="ouch" data-good="yum">
        Alert
      </Alert>
    );
    const element = getByRole('alert');

    expect(element).toHaveAttribute('data-bad', 'ouch');
    expect(element).toHaveAttribute('data-good', 'yum');
  });

  test('It should render a close button.', () => {
    const { getByRole } = render(<Alert onClose={jest.fn()}>Alert</Alert>);
    const button = getByRole('button');

    expect(button).toBeTruthy();
    expect(button).toHaveAttribute('aria-label');
  });

  test('It should call close handler.', () => {
    const onClose = jest.fn();
    const { getByRole } = render(<Alert onClose={onClose}>Alert</Alert>);
    const button = getByRole('button');

    expect(onClose).toHaveBeenCalledTimes(0);

    fireEvent.click(button);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('It should focus on button.', () => {
    const ref = React.createRef<Alert>();
    const { getByRole } = render(
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      <Alert onClose={jest.fn()} ref={ref as any}>
        Alert
      </Alert>
    );

    expect(document.activeElement).toBe(document.body);

    ref.current?.focusButton();

    expect(document.activeElement).toBe(getByRole('button'));
  });

  test.each<AlertVariant>(['error', 'success', 'warning'])(
    'It should render variant: %s.',
    (variant) => {
      const { getByRole } = render(<Alert variant={variant}>Alert</Alert>);

      expect(getByRole('alert')).toHaveClass(
        `Alert${variant.replace(/(\w)/, (x) => x.toUpperCase())}`
      );
    }
  );
});
