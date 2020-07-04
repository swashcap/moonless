import React from 'react';

import { clsx } from '../utils/clsx';
import styles from './Button.module.css';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ className, variant, ...rest }) => (
  <button
    className={clsx(
      styles.Button,
      variant === 'primary' && styles.ButtonPrimary,
      variant === 'secondary' && styles.ButtonSecondary,
      className
    )}
    {...rest}
  />
);

export type PrimaryButtonProps = Omit<ButtonProps, 'variant'>;

export const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => (
  <Button variant="primary" {...props} />
);

export type SecondaryButtonProps = Omit<ButtonProps, 'variant'>;

export const SecondaryButton: React.FC<SecondaryButtonProps> = (props) => (
  <Button variant="secondary" {...props} />
);
