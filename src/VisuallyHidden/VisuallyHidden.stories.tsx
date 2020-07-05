import React from 'react';

import { VisuallyHidden } from './VisuallyHidden';

export default {
  component: VisuallyHidden,
  title: 'Component|VisuallyHidden',
};

export const Default = () => <VisuallyHidden>Default</VisuallyHidden>;

export const WithFocus = () => (
  <React.Fragment>
    <VisuallyHidden isFocusable>Default</VisuallyHidden>
    <VisuallyHidden className="storybook-active" isFocusable>
      Active
    </VisuallyHidden>
    <VisuallyHidden className="storybook-focus" isFocusable>
      Focus
    </VisuallyHidden>
  </React.Fragment>
);
