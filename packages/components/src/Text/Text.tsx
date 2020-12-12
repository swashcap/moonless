import { clsx } from 'moonless-utils';

import styles from './Text.module.css';

export type TextVariant =
  | 'title'
  | 'headline-1'
  | 'headline-2'
  | 'headline-3'
  | 'subhead-1'
  | 'subhead-2'
  | 'body'
  | 'caption';

export type TextElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'small'
  | 'span';

export type TextProps<
  T extends TextElement
> = React.HTMLAttributes<HTMLElement> & {
  as?: T;
  /**
   * The text's size/type variation.
   *
   * @default 'body'
   */
  variant?: TextVariant;
};

export const Text = <T extends TextElement = 'span'>({
  as,
  className,
  variant,
  ...rest
}: TextProps<T>) => {
  const Component = as ?? 'span';

  return (
    <Component
      className={clsx(
        styles.Text,
        variant === 'body' && styles.TextBody,
        variant === 'caption' && styles.TextCaption,
        variant === 'headline-1' && styles.TextHeadline1,
        variant === 'headline-2' && styles.TextHeadline2,
        variant === 'headline-3' && styles.TextHeadline3,
        variant === 'subhead-1' && styles.TextSubhead1,
        variant === 'subhead-2' && styles.TextSubhead2,
        variant === 'title' && styles.TextTitle,
        className
      )}
      {...rest}
    />
  );
};
