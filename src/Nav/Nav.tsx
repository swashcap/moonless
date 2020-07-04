import React from 'react';

import { clsx } from '../utils/clsx';
import styles from './Nav.module.css';

export type NavProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type NavItemProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export class Nav extends React.Component<NavProps> {
  static Item = ({ children, className, ...rest }: NavItemProps) => {
    return (
      <li className={className}>
        <a className={styles.NavLink} {...rest}>
          {children}
        </a>
      </li>
    );
  };

  render() {
    const { children, className, ...rest } = this.props;

    return (
      <nav className={clsx(styles.Nav, className)} {...rest}>
        <ul className={styles.NavList}>{children}</ul>
      </nav>
    );
  }
}
