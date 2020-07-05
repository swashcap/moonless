import React from 'react';

import { TextField } from './TextField';

export default {
  component: TextField,
  title: 'Component|TextField',
};

export const Default = () => <TextField />;

export const WithError = () => <TextField error="Invalid request" />;

export const WithLabel = () => <TextField label="Label" />;
