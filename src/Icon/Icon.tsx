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

export const ArrowDownIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path
      className={styles.fillNone + ' ' + styles.strokeCurrentColor}
      d="M6 3v6M2.5 6.5l3.5 3 3.5-3"
    />
  </Icon>
);

export const ArrowLeftIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path
      className={styles.fillNone + ' ' + styles.strokeCurrentColor}
      d="M3 6h6M5.5 2.5L2.5 6l3 3.5"
    />
  </Icon>
);
export const ArrowRightIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path
      className={styles.fillNone + ' ' + styles.strokeCurrentColor}
      d="M3 6h6M6.5 2.5l3 3.5-3 3.5"
    />
  </Icon>
);

export const ArrowUpIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path
      className={styles.fillNone + ' ' + styles.strokeCurrentColor}
      d="M6 3v6M2.5 5.5l3.5-3 3.5 3"
    />
  </Icon>
);

export const CaretDownIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path
      className={styles.fillNone + ' ' + styles.strokeCurrentColor}
      d="M3 5l3 3 3-3"
    />
  </Icon>
);

export const CaretLeftIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path
      className={styles.fillNone + ' ' + styles.strokeCurrentColor}
      d="M7 3L4 6l3 3"
    />
  </Icon>
);

export const CaretRightIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path
      className={styles.fillNone + ' ' + styles.strokeCurrentColor}
      d="M5 3l3 3-3 3"
    />
  </Icon>
);

export const CaretUpIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path
      className={styles.fillNone + ' ' + styles.strokeCurrentColor}
      d="M3 7l3-3 3 3"
    />
  </Icon>
);

export const CheckIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path
      className={styles.fillNone + ' ' + styles.strokeCurrentColor}
      d="M2.5 6.5l2.5 3 4.5-6"
    />
  </Icon>
);

export const ClearIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <g className={styles.strokeCurrentColor}>
      <circle
        className={styles.fillNone}
        strokeWidth=".75"
        cx="6"
        cy="6"
        r="5.625"
      />
      <path d="M3.5 3.5l5 5M3.5 8.5l5-5" />
    </g>
  </Icon>
);

export const EditIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <g
      className={styles.fillNone + ' ' + styles.strokeCurrentColor}
      transform="rotate(45 6 6)"
      strokeWidth=".75"
    >
      <path d="M7.375 3.375h-2.75v5.984L6 10.931l1.375-1.572V3.375z" />
      <rect x="4.625" y="1.125" width="2.75" height="2.25" rx="1" />
    </g>
  </Icon>
);

export const InfoIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <g className={styles.fillNone + ' ' + styles.strokeCurrentColor}>
      <circle strokeWidth=".75" cx="6" cy="6" r="5.625" />
      <circle
        className={styles.fillCurrentColor + ' ' + styles.strokeNone}
        cx="5.75"
        cy="3.25"
        r="1"
      />
      <path d="M5 5.5h1v4h1.5-3" />
    </g>
  </Icon>
);

export const MapPinIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path
      className={styles.fillNone + ' ' + styles.strokeCurrentColor}
      d="M6 1.875c-.772 0-1.471.313-1.977.819a2.796 2.796 0 00-.443 3.378L6 10.252l2.42-4.18c.387-.668.466-1.43.282-2.121A2.796 2.796 0 006 1.875z"
      strokeWidth=".75"
    />
    <circle className={styles.fillCurrentColor} cx="6" cy="4.75" r="1" />
  </Icon>
);

export const MenuIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path
      className={styles.strokeCurrentColor}
      d="M2.5 3h7M2.5 5.5h7M2.5 8h7"
    />
  </Icon>
);

export const MinusIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path className={styles.strokeCurrentColor} d="M2 6h8" />
  </Icon>
);

export const PlusIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path className={styles.strokeCurrentColor} d="M6 2v8M2 6h8" />
  </Icon>
);

export const SuccessIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <g className={styles.fillNone + ' ' + styles.strokeCurrentColor}>
      <circle strokeWidth=".75" cx="6" cy="6" r="5.625" />
      <path d="M3.5 6.5l2 3 4-5.5" />
    </g>
  </Icon>
);

export const TagIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path
      className={styles.fillNone + ' ' + styles.strokeCurrentColor}
      d="M1 6l3-3h6v6H4z"
      strokeWidth=".75"
    />
    <circle className={styles.fillCurrentColor} cx="4.25" cy="6" r="1" />
  </Icon>
);
export const WarningIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <g className={styles.fillCurrentColor}>
      <rect x="5.5" y="5" width="1" height="3.5" rx=".5" />
      <circle cx="6" cy="9.5" r=".5" />
      <path
        className={styles.fillNone + ' ' + styles.strokeCurrentColor}
        d="M1 11h10L6 2z"
        strokeWidth=".75"
      />
    </g>
  </Icon>
);

export const XIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path className={styles.strokeCurrentColor} d="M3 3l6 6M3 9l6-6" />
  </Icon>
);
