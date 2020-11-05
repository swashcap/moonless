import React from 'react';
import { clsx } from 'moonless-utils';

import styles from './List.module.css';

export type ListProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type ListColProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export class List extends React.Component<ListProps> {
  static Item({ className, ...rest }: ListColProps) {
    return <div className={clsx(styles.ListItem, className)} {...rest} />;
  }

  render() {
    const { className, ...rest } = this.props;

    return <div className={clsx(styles.List, className)} {...rest} />;
  }
}
