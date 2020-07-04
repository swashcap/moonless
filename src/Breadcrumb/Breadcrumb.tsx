import React from 'react';

import styles from './Breadcrumb.module.css';

export interface BreadcrumbProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  items: ReadonlyArray<
    Readonly<{
      current?: boolean;
      href: string;
      name: string;
    }>
  >;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  children,
  items,
  ...rest
}) => (
  <nav {...rest}>
    <ol
      className={styles.BreadcrumbList}
      itemScope
      itemType="http://schema.org/BreadcrumbList"
    >
      {items.map(({ current, href, name }, index) => (
        <li
          className={styles.BreadcrumbListItem}
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/ListItem"
          key={href}
        >
          <a
            aria-current={current ? 'page' : undefined}
            className={styles.BreadcrumbLink}
            itemProp="item"
            href={href}
          >
            <span itemProp="name">{name}</span>
          </a>
          <meta itemProp="position" content={(index + 1).toString()} />
        </li>
      ))}
    </ol>
  </nav>
);
