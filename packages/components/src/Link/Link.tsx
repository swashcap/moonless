import { clsx } from 'moonless-utils';

import styles from './Link.module.css';

export type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const Link: React.FC<LinkProps> = ({ children, className, ...rest }) => (
  <a className={clsx(styles.Link, className)} {...rest}>
    {children}
  </a>
);
