import React from 'react';

import { Alert } from './Alert';

export default {
  component: Alert,
  title: 'Alert',
};

export const Default = () => <Alert>Default</Alert>;

export const OnClose = () => <Alert onClose={console.log}>On Close</Alert>;

export const Variant = () => (
  <>
    <Alert variant="error">Error</Alert>
    <Alert variant="success">Success</Alert>
    <Alert variant="warning">Warning</Alert>
  </>
);
