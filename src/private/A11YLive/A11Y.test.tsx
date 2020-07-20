import React from 'react';
import { render } from '@testing-library/react';

import { A11YLive } from './A11YLive';

describe('A11YLive', () => {
  test('It should render.', () => {
    const { container } = render(<A11YLive />);

    expect(container).toMatchSnapshot();
  });

  test('It should render live regions.', () => {
    const { container } = render(<A11YLive />);

    expect(container.querySelector('[aria-live="assertive"]')).toBeTruthy();
    expect(container.querySelector('[aria-live="polite"]')).toBeTruthy();
  });

  test('It should pass assertive property.', () => {
    const { container } = render(<A11YLive assertive="This is assertive." />);

    expect(
      container.querySelector('[aria-live="assertive"]')?.textContent
    ).toBe('This is assertive.');
  });

  test('It should pass polite property.', () => {
    const { container } = render(<A11YLive polite="This is polite." />);

    expect(container.querySelector('[aria-live="polite"]')?.textContent).toBe(
      'This is polite.'
    );
  });
});
