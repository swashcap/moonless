import React from 'react';

import { A11YLive } from './A11YLive';

export default {
  component: A11YLive,
  title: 'Private/A11YLive',
};

export const Default = () => <A11YLive />;

export const WithAssertive = () => <A11YLive assertive="This is assertive." />;

export const WithPolite = () => <A11YLive polite="This is polite." />;
