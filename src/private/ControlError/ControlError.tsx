import React from 'react';

import styles from './ControlError.module.css';
import { clsx } from '../../utils/clsx';

export type ControlErrorProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export const ControlError: React.FC<ControlErrorProps> = ({
  className,
  ...rest
}) => <span className={clsx(styles.ControlError, className)} {...rest} />;
