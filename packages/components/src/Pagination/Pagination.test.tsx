import { render } from '@testing-library/react';

import { Pagination } from './Pagination';

describe('Pagination', () => {
  test('It should render.', () => {
    const { container } = render(<Pagination />);

    expect(container).toMatchSnapshot();
  });
});
