import React from 'react';

import { clsx } from '../utils/clsx';
import styles from './Grid.module.css';

export type GridProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type GridColProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export class Grid extends React.Component<GridProps> {
  static Col({ className, ...rest }: GridColProps) {
    return <div className={clsx(styles.GridCol, className)} {...rest} />;
  }

  render() {
    const { className, ...rest } = this.props;

    return <div className={clsx(styles.Grid, className)} {...rest} />;
  }
}
