import React from 'react';

import { clsx } from '../utils/clsx';
import styles from './Pagination.module.css';

export type PaginationProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Pagination: React.FC<PaginationProps> = ({
  children,
  className,
  ...rest
}) => (
  <div className={clsx(styles.Pagination, className)} {...rest}>
    {children}
  </div>
);
