import React from 'react';
import { clsx } from 'moonless-utils';

import styles from './VisuallyHidden.module.css';

export interface VisuallyHiddenProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  isFocusable?: boolean;
}

export const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
  className,
  isFocusable,
  ...rest
}) => (
  <span
    className={clsx(
      styles.VisuallyHidden,
      isFocusable && styles.VisuallyHiddenFocusable,
      className
    )}
    {...rest}
  />
);
