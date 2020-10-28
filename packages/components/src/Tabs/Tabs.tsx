import React from 'react';

import styles from './Tabs.module.css';

export interface TabsProps {
  readonly children?: React.ReactNode;
  readonly activeItemIndex?: number;
  readonly items: string[];
  readonly onChange: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  activeItemIndex = 0,
  children,
  items,
  onChange,
}) => (
  <>
    <div className={styles.TabsList} role="tablist">
      {items.map((item, index) => {
        return (
          <button
            aria-selected={index === activeItemIndex ? 'true' : undefined}
            className={styles.TabsButton}
            key={index}
            onClick={(event) => onChange(event, index)}
            role="tab"
          >
            {item}
          </button>
        );
      })}
    </div>
    {children}
  </>
);
