import React from 'react';

import { Checkbox } from './Checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

export const Default = () => <Checkbox />;

export const Checked = () => {
  const [checked, setChecked] = React.useState(true);

  return <Checkbox checked={checked} onChange={() => setChecked(!checked)} />;
};

export const Disabled = () => (
  <>
    <Checkbox disabled />
    <Checkbox className="storybook-focus" disabled />
    <Checkbox className="storybook-hover" disabled />
    <Checkbox className="storybook-active" disabled />
  </>
);

export const WithError = () => <Checkbox error="Error" />;

export const WithLabel = () => <Checkbox label="Label" />;
