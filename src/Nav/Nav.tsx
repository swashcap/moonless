import React from 'react';

import { clsx } from '../utils/clsx';
import styles from './Nav.module.css';

export type NavProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface NavItemProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  isCurrent?: boolean;
}

export class Nav extends React.Component<NavProps> {
  static Item = ({ children, className, isCurrent, ...rest }: NavItemProps) => {
    return (
      <li className={className}>
        <a
          className={clsx(styles.NavLink, isCurrent && styles.NavLinkCurrent)}
          {...rest}
        >
          {children}
        </a>
      </li>
    );
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <nav {...rest}>
        <ul className={styles.NavList}>{children}</ul>
      </nav>
    );
  }
}
