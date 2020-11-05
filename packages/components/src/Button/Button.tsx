import React from 'react';
import { clsx } from 'moonless-utils';

import styles from './Button.module.css';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonElement = HTMLAnchorElement | HTMLButtonElement;

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonOwnProps {
  size?: ButtonSize;
}

export interface ButtonAnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    ButtonOwnProps {
  as: 'a';
}

export interface ButtonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonOwnProps {
  as?: 'button';
}

export type ButtonProps<T extends ButtonElement> = T extends HTMLAnchorElement
  ? ButtonAnchorProps
  : ButtonButtonProps;

export type ButtonRef<T> = (
  instance: T | null
) => void | React.MutableRefObject<T | null> | null;

type BaseButtonProps<T extends ButtonElement> = ButtonProps<T> & {
  variant: ButtonVariant;
};

const BaseButtonFn = <T extends ButtonElement = HTMLButtonElement>(
  {
    as,
    children,
    className,
    size = 'medium',
    variant,
    ...rest
  }: BaseButtonProps<T>,
  ref: ButtonRef<T>
) => {
  const cls = clsx(
    styles.Button,
    size === 'small' && styles.ButtonSmall,
    size === 'medium' && styles.ButtonMedium,
    size === 'large' && styles.ButtonLarge,
    variant === 'primary' && styles.ButtonPrimary,
    variant === 'secondary' && styles.ButtonSecondary,
    className
  );

  if (as === 'a') {
    return (
      <a
        className={cls}
        ref={ref as React.LegacyRef<HTMLAnchorElement>}
        {...(rest as Omit<
          ButtonAnchorProps,
          'as' | 'children' | 'className' | 'size' | 'variant'
        >)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cls}
      type="button"
      ref={ref as React.LegacyRef<HTMLButtonElement>}
      {...(rest as Omit<
        ButtonButtonProps,
        'as' | 'children' | 'className' | 'size' | 'variant'
      >)}
    >
      {children}
    </button>
  );
};

const BaseButton = React.forwardRef(
  BaseButtonFn as React.ForwardRefRenderFunction<
    ButtonElement,
    BaseButtonProps<ButtonElement>
  >
);

// Primary

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const PrimaryButtonFn = (props: any, ref: any) => (
  <BaseButton ref={ref} variant="primary" {...props} />
);

export const PrimaryButton = React.forwardRef(
  PrimaryButtonFn as React.ForwardRefRenderFunction<
    ButtonElement,
    ButtonProps<ButtonElement>
  >
);

// Secondary

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const SecondaryButtonFn = (props: any, ref: any) => (
  <BaseButton ref={ref} variant="secondary" {...props} />
);

export const SecondaryButton = React.forwardRef(
  SecondaryButtonFn as React.ForwardRefRenderFunction<
    ButtonElement,
    ButtonProps<ButtonElement>
  >
);
