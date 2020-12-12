import { render } from '@testing-library/react';

import { Nav } from './Nav';

describe('Nav', () => {
  test('It should render.', () => {
    const { container } = render(<Nav />);

    expect(container).toMatchSnapshot();
  });
});
