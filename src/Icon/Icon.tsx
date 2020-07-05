import React from 'react';

import { clsx } from '../utils/clsx';
import styles from './Icon.module.css';

export type IconProps = React.SVGProps<SVGSVGElement>;

const Icon: React.FC<IconProps> = ({ className, ...rest }) => (
  <svg
    className={clsx(styles.Icon, className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    {...rest}
  />
);

export const CheckIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.5 6.5l2.5 3 4.5-6"
    />
  </Icon>
);

export const MinusIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path stroke="currentColor" stroke-linecap="round" d="M2 6h8" />
  </Icon>
);

export const XIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path stroke="currentColor" strokeLinecap="round" d="M3 3l6 6M3 9l6-6" />
  </Icon>
);
