import React from 'react';

import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';

export interface A11YLiveProps {
  assertive?: React.ReactNode;
  polite?: React.ReactNode;
}

export const A11YLive: React.FC<A11YLiveProps> = ({ assertive, polite }) => (
  <VisuallyHidden>
    <div aria-live="assertive">{assertive}</div>
    <div aria-live="polite">{polite}</div>
  </VisuallyHidden>
);
