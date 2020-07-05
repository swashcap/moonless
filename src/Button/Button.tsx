import React from 'react';

import { clsx } from '../utils/clsx';
import styles from './Button.module.css';

export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: ButtonSize;
  variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  className,
  size = 'medium',
  variant,
  ...rest
}) => (
  <button
    className={clsx(
      styles.Button,
      size === 'small' && styles.ButtonSmall,
      size === 'medium' && styles.ButtonMedium,
      size === 'large' && styles.ButtonLarge,
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
