import { render } from '@testing-library/react';

import { Link } from './Link';

describe('Link', () => {
  test('It should render.', () => {
    const { container } = render(<Link>Link</Link>);

    expect(container).toMatchSnapshot();
  });
});
