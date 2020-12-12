import { render } from '@testing-library/react';

import { Breadcrumb } from './Breadcrumb';

describe('Breadcrumb', () => {
  test('It should render.', () => {
    const { container } = render(<Breadcrumb items={[]} />);

    expect(container).toMatchSnapshot();
  });

  test('It should spread properties to the root element.', () => {
    const { getByRole } = render(
      <Breadcrumb className="test1" data-testid="test2" items={[]} />
    );

    const element = getByRole('navigation');

    expect(element).toHaveAttribute('class', 'test1');
    expect(element).toHaveAttribute('data-testid', 'test2');
  });

  test('It should render items.', () => {
    const items = [
      {
        href: '/',
        name: 'Home',
      },
      {
        href: '/page-1/',
        name: 'Page 1',
      },
      {
        isCurrent: true,
        href: '/page-1/page-2/',
        name: 'Page 2',
      },
    ];
    const { getAllByRole } = render(<Breadcrumb items={items} />);

    const anchors = getAllByRole('link');

    expect(anchors.length).toBe(items.length);

    items.forEach((item, index) => {
      expect(anchors[index]).toHaveAttribute('href', item.href);
      expect(anchors[index].textContent).toBe(item.name);

      if (item.isCurrent) {
        expect(anchors[index]).toHaveAttribute('aria-current', 'page');
      }
    });
  });

  test('It should include schema.org attributes on elements.', () => {
    const items = [
      {
        href: '/',
        name: 'Home',
      },
      {
        href: '/page-1/',
        name: 'Page 1',
      },
      {
        isCurrent: true,
        href: '/page-1/page-2/',
        name: 'Page 2',
      },
    ];
    const { container } = render(<Breadcrumb items={items} />);

    const listItems = container.querySelectorAll('li');

    expect(listItems.length).toBe(items.length);

    listItems.forEach((item, index) => {
      expect(item.querySelector('meta[itemProp="position"]')).toHaveAttribute(
        'content',
        (index + 1).toString()
      );
    });
  });
});
