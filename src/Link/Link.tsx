import React from 'react';

import { clsx } from '../utils/clsx';
import './Link.css';

export type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const Link: React.FC<LinkProps> = ({ children, className, ...rest }) => (
  <a className={clsx('Link', className)} {...rest}>
    {children}
  </a>
);
