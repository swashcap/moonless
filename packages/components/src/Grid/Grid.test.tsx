import { render } from '@testing-library/react';

import { Grid, GridColSpan } from './Grid';

describe('Grid', () => {
  test('It should render.', () => {
    const { container } = render(<Grid />);

    expect(container).toMatchSnapshot();
  });

  test('It should pass className property.', () => {
    const { getByTestId } = render(
      <Grid className="test" data-testid="grid" />
    );

    expect(getByTestId('grid')).toHaveClass('test');
  });

  test('It should spread properties to the root element.', () => {
    const { getByTestId } = render(
      <Grid data-greetings="hello" data-sup="hi" data-testid="grid" />
    );
    const grid = getByTestId('grid');

    expect(grid).toHaveAttribute('data-greetings', 'hello');
    expect(grid).toHaveAttribute('data-sup', 'hi');
  });
});

describe('GridCol', () => {
  test('It should render.', () => {
    const { container } = render(<Grid.Col />);

    expect(container).toMatchSnapshot();
  });

  test('It should pass className property.', () => {
    const { getByTestId } = render(
      <Grid.Col className="test" data-testid="grid-col" />
    );

    expect(getByTestId('grid-col')).toHaveClass('test');
  });

  test('It should spread properties to the root element.', () => {
    const { getByTestId } = render(
      <Grid.Col data-greetings="hello" data-sup="hi" data-testid="grid-col" />
    );
    const grid = getByTestId('grid-col');

    expect(grid).toHaveAttribute('data-greetings', 'hello');
    expect(grid).toHaveAttribute('data-sup', 'hi');
  });

  test.each<GridColSpan>([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ])('It should render column span: %s.', (span) => {
    const { getByTestId } = render(
      <Grid.Col data-testid="grid-col" span={span} />
    );

    expect(getByTestId('grid-col')).toHaveClass(`GridCol${span}`);
  });
});
