import React from 'react';

import { clsx } from '../utils/clsx';
import styles from './Card.module.css';

export type CardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Card: React.FC<CardProps> = ({ className, ...rest }) => (
  <div className={clsx(styles.Card, className)} {...rest} />
);
