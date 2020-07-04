import React from 'react';

import { clsx } from '../utils/clsx';
import styles from './Tag.module.css';

export type TagVariant = 'primary' | 'secondary';

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
      variant === 'primary' && styles.TagPrimary,
      variant === 'secondary' && styles.TagSecondary,
      className
    )}
    {...rest}
  />
);
