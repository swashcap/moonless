import React from 'react';

import { clsx } from '../utils/clsx';
import styles from './Tag.module.css';

export type TagVariant =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'warning';

export interface TagProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  variant?: TagVariant;
}

export const Tag: React.FC<TagProps> = ({
  className,
  variant = 'primary',
  ...rest
}) => (
  <span
    className={clsx(
      styles.Tag,
      variant === 'error' && styles.TagError,
      variant === 'primary' && styles.TagPrimary,
      variant === 'secondary' && styles.TagSecondary,
      variant === 'success' && styles.TagSuccess,
      variant === 'warning' && styles.TagWarning,
      className
    )}
    {...rest}
  />
);
