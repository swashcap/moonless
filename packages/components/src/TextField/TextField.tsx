import React from 'react';

import styles from './TextField.module.css';
import { ControlError } from '../private/ControlError/ControlError';
import { useId } from '../utils/useId';

export interface TextFieldProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  disabled?: boolean;
  error?: React.ReactNode;
  id?: string;
  label?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: React.InputHTMLAttributes<HTMLInputElement>['value'];
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ disabled, error, label, id: idProp, onChange, value, ...rest }, ref) => {
    const fallbackId = useId('text-field-');
    const errorId = useId('text-field-error-');

    const id = idProp ?? fallbackId;

    return (
      <div {...rest}>
        {!!label && (
          <label className={styles.TextFieldLabel} htmlFor={id}>
            {label}
          </label>
        )}
        <input
          aria-describedby={error ? errorId : undefined}
          aria-invalid={error ? 'true' : undefined}
          className={styles.TextFieldInput}
          disabled={disabled}
          id={id}
          onChange={onChange}
          ref={ref}
          value={value}
        />
        {error && (
          <ControlError className={styles.TextFieldError} id={errorId}>
            {error}
          </ControlError>
        )}
      </div>
    );
  }
);
