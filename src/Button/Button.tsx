import React from 'react';

import { clsx } from '../utils/clsx';
import styles from './Button.module.css';

export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant: 'primary' | 'secondary';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = 'medium', variant, ...rest }, ref) => (
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
      ref={ref}
      {...rest}
    />
  )
);

export type PrimaryButtonProps = Omit<ButtonProps, 'variant'>;

export const PrimaryButton = React.forwardRef<
  HTMLButtonElement,
  PrimaryButtonProps
>((props, ref) => <Button ref={ref} variant="primary" {...props} />);

export type SecondaryButtonProps = Omit<ButtonProps, 'variant'>;

export const SecondaryButton = React.forwardRef<
  HTMLButtonElement,
  SecondaryButtonProps
>((props, ref) => <Button ref={ref} variant="secondary" {...props} />);
