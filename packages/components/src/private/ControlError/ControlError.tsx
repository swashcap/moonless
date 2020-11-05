import React from 'react';
import { clsx } from 'moonless-utils';

import styles from './ControlError.module.css';

export type ControlErrorProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export const ControlError: React.FC<ControlErrorProps> = ({
  className,
  ...rest
}) => <span className={clsx(styles.ControlError, className)} {...rest} />;
