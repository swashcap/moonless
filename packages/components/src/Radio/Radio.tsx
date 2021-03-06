import { forwardRef } from 'react';
import { useId } from 'moonless-utils';

import styles from './Radio.module.css';
import visuallyHiddenStyles from '../VisuallyHidden/VisuallyHidden.module.css';

export interface RadioProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  label?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ checked, disabled, id: idProp, label, onChange, ...rest }, ref) => {
    const fallbackId = useId('checkbox-');

    const id = idProp ?? fallbackId;

    return (
      <div {...rest}>
        <label className={styles.RadioLabel} htmlFor={id}>
          <input
            checked={checked}
            className={visuallyHiddenStyles.VisuallyHidden}
            disabled={disabled}
            id={id}
            onChange={onChange}
            ref={ref}
            type="radio"
          />
          <span aria-hidden="true" className={styles.RadioIndicator} />
          {label}
        </label>
      </div>
    );
  }
);
