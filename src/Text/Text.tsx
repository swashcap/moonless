import React from 'react';

import { clsx } from '../utils/clsx';

export type TextProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export const Text: React.FC<TextProps> = ({ className, ...rest }) => (
  <span className={clsx('Text', className)} {...rest} />
);
