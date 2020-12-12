import { render } from '@testing-library/react';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  test('It should render.', () => {
    const { container } = render(<Checkbox />);

    expect(container).toMatchSnapshot();
  });

  test('It should render a checkbox', () => {
    const { getByRole } = render(<Checkbox />);

    expect(getByRole('checkbox')).toBeTruthy();
  });

  test('It should render checked property.', () => {
    const { getByRole } = render(<Checkbox checked onChange={jest.fn()} />);

    const element = getByRole('checkbox');

    expect(element).toHaveAttribute('id');
  });

  test('It should render disabled property.', () => {
    const { getByRole } = render(<Checkbox disabled />);

    expect(getByRole('checkbox')).toHaveAttribute('disabled');
  });

  test('It should render id error property.', () => {
    const { getByRole } = render(<Checkbox id="ident" />);

    expect(getByRole('checkbox')).toHaveAttribute('id', 'ident');
  });

  test('It should render label property.', () => {
    const { getByLabelText } = render(<Checkbox label="Imma label" />);

    expect(getByLabelText('Imma label')).toBeEmptyDOMElement();
  });

  test('It should spread properties to the root element.', () => {
    const { container } = render(
      <Checkbox className="classy" data-testid="testy" />
    );

    expect(container.firstChild).toHaveClass('classy');
    expect(container.firstChild).toHaveAttribute('data-testid', 'testy');
  });
});
