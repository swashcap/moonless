import React from 'react';

import { TextField } from './TextField';

export default {
  component: TextField,
  title: 'Component/TextField',
};

export const Default = () => <TextField />;

export const WithError = () => <TextField error="Invalid request" />;

export const WithLabel = () => <TextField label="Label" />;

export const WithValue = () => (
  <>
    <TextField label="Label" value="Value" />
    <TextField className="storybook-focus" label="focus" value="Value" />
    <TextField className="storybook-hover" label="hover" value="Value" />
    <TextField className="storybook-active" label="active" value="Value" />
    <TextField
      className="storybook-active"
      disabled
      label="disabled"
      value="Value"
    />
  </>
);
