import React from 'react';

import styles from './Breadcrumb.module.css';
import { Link } from '../Link/Link';

export interface BreadcrumbProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  items: ReadonlyArray<
    Readonly<{
      isCurrent?: boolean;
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
      {items.map(({ href, isCurrent, name }, index) => (
        <li
          className={styles.BreadcrumbListItem}
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/ListItem"
          key={href}
        >
          <Link
            aria-current={isCurrent ? 'page' : undefined}
            className={styles.BreadcrumbLink}
            itemProp="item"
            href={href}
          >
            <span itemProp="name">{name}</span>
          </Link>
          <meta itemProp="position" content={(index + 1).toString()} />
        </li>
      ))}
    </ol>
  </nav>
);
