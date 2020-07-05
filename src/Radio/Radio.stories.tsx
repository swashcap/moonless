import React from 'react';

import { Radio } from './Radio';

export default {
  component: Radio,
  title: 'Component|Radio',
};

export const Default = () => {
  const [checked, setChecked] = React.useState(false);

  return <Radio checked={checked} onChange={() => setChecked(!checked)} />;
};

export const NotChecked = () => (
  <>
    <Radio label="Default" />
    <Radio className="storybook-focus" label="Focus" />
    <Radio className="storybook-hover" label="Hover" />
    <Radio className="storybook-active" label="Active" />
    <Radio disabled label="Disabled" />
  </>
);

export const Checked = () => (
  <>
    <Radio checked label="Checked" />
    <Radio checked className="storybook-focus" label="Focus" />
    <Radio checked className="storybook-hover" label="Hover" />
    <Radio checked className="storybook-active" label="Active" />
    <Radio checked disabled label="Disabled" />
  </>
);
