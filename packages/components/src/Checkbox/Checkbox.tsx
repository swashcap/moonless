import { forwardRef, useEffect, useRef } from 'react';
import { useId } from 'moonless-utils';

import styles from './Checkbox.module.css';
import visuallyHiddenStyles from '../VisuallyHidden/VisuallyHidden.module.css';
import { CheckIcon, MinusIcon } from '../Icon/Icon';
import { ControlError } from '../private/ControlError/ControlError';

export interface CheckboxProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  checked?: boolean;
  disabled?: boolean;
  error?: React.ReactNode;
  id?: string;
  indeterminate?: boolean;
  label?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      disabled,
      error,
      id: idProp,
      indeterminate,
      label,
      onChange,
      ...rest
    },
    ref
  ) => {
    const fallbackId = useId('checkbox-');
    const errorId = useId('checkbox-error-');
    const localRef = useRef<HTMLInputElement | null>();

    useEffect(() => {
      if (
        localRef.current &&
        localRef.current.indeterminate !== indeterminate
      ) {
        localRef.current.indeterminate = !!indeterminate;
      }
    }, [indeterminate, localRef]);

    const id = idProp ?? fallbackId;

    return (
      <div {...rest}>
        <label className={styles.CheckboxLabel} htmlFor={id}>
          <input
            aria-describedby={error ? errorId : undefined}
            aria-invalid={error ? 'true' : undefined}
            checked={checked}
            className={visuallyHiddenStyles.VisuallyHidden}
            disabled={disabled}
            id={id}
            onChange={onChange}
            ref={(element) => {
              if (typeof ref === 'function') {
                ref(element);
              } else if (typeof ref === 'object' && ref) {
                ref.current = element;
              }

              localRef.current = element;
            }}
            type="checkbox"
          />
          <span aria-hidden="true" className={styles.CheckboxIndicator}>
            {indeterminate ? (
              <MinusIcon className={styles.CheckboxIndicatorIcon} />
            ) : (
              <CheckIcon className={styles.CheckboxIndicatorIcon} />
            )}
          </span>
          {label}
        </label>
        {!!error && (
          <ControlError className={styles.CheckboxError} id={errorId}>
            {error}
          </ControlError>
        )}
      </div>
    );
  }
);
