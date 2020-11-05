import React from 'react';
import { clsx } from 'moonless-utils';

import styles from './Grid.module.css';

export type GridProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type GridColSpan =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';

export interface GridColProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  span?: GridColSpan;
}

export class Grid extends React.Component<GridProps> {
  static Col({ className, span, ...rest }: GridColProps) {
    return (
      <div
        className={clsx(
          styles.GridCol,
          span === '1' && styles.GridCol1,
          span === '2' && styles.GridCol2,
          span === '3' && styles.GridCol3,
          span === '4' && styles.GridCol4,
          span === '5' && styles.GridCol5,
          span === '6' && styles.GridCol6,
          span === '7' && styles.GridCol7,
          span === '8' && styles.GridCol8,
          span === '9' && styles.GridCol9,
          span === '10' && styles.GridCol10,
          span === '11' && styles.GridCol11,
          span === '12' && styles.GridCol12,

          className
        )}
        {...rest}
      />
    );
  }

  render() {
    const { className, ...rest } = this.props;

    return <div className={clsx(styles.Grid, className)} {...rest} />;
  }
}
