import React from 'react';
import { clsx } from 'moonless-utils';

import { XIcon } from '../Icon/Icon';

import styles from './Alert.module.css';

export type AlertVariant = 'error' | 'success' | 'warning';

export interface AlertProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  onClose?: React.DOMAttributes<HTMLButtonElement>['onClick'];
  variant?: AlertVariant;
}

export class Alert extends React.Component<AlertProps> {
  private buttonRef = React.createRef<HTMLButtonElement>();

  focusButton() {
    this.buttonRef.current?.focus();
  }

  render() {
    const {
      children,
      className,
      onClose,
      variant = 'warning',
      ...rest
    } = this.props;

    return (
      <div
        className={clsx(
          styles.Alert,
          variant === 'error' && styles.AlertError,
          variant === 'success' && styles.AlertSuccess,
          variant === 'warning' && styles.AlertWarning,
          onClose && styles.AlertOnClose,
          className
        )}
        role="alert"
        {...rest}
      >
        {children}
        {!!onClose && (
          <button
            aria-label="Close"
            className={styles.AlertButton}
            onClick={onClose}
            ref={this.buttonRef}
          >
            <XIcon />
          </button>
        )}
      </div>
    );
  }
}
