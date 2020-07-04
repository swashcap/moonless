import React from 'react';

import styles from './Checkbox.module.css';
import { CheckIcon } from '../Icon/Icon';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden.module.css';
import { useId } from '../utils/useId';

export interface CheckboxProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  checked?: boolean;
  disabled?: boolean;
  error?: React.ReactNode;
  id?: string;
  label?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, disabled, error, id: idProp, label, onChange, ...rest }, ref) => {
    const fallbackId = useId('checkbox-');
    const errorId = useId('checkbox-error-');

    const id = idProp ?? fallbackId;

    return (
      <div {...rest}>
        <label className={styles.CheckboxLabel} htmlFor={id}>
          <input
            aria-describedby={error ? errorId : undefined}
            aria-invalid={error ? 'true' : undefined}
            checked={checked}
            className={VisuallyHidden}
            disabled={disabled}
            id={id}
            onChange={onChange}
            ref={ref}
            type="checkbox"
          />
          <span className={styles.CheckboxIndicator}>
            <CheckIcon aria-hidden="true" />
          </span>
          {label}
        </label>
        {!!error && (
          <span className={styles.CheckboxError} id={errorId}>
            {error}
          </span>
        )}
      </div>
    );
  }
);
