import React from 'react';

import styles from './Radio.module.css';

type RadioProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ ...rest }, ref) => (
    <div {...rest}>
      <label className={styles.RadioLabel}>
        <input ref={ref} type="radio" />
      </label>
    </div>
  )
);
