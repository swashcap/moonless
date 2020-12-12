import { render } from '@testing-library/react';

import { TextField } from './TextField';

describe('TextField', () => {
  test('It should render.', () => {
    const { container } = render(<TextField />);

    expect(container).toMatchSnapshot();
  });
});
