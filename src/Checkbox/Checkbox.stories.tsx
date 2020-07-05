import React from 'react';

import { Checkbox } from './Checkbox';

export default {
  component: Checkbox,
  title: 'Component|Checkbox',
};

export const Default = () => <Checkbox />;

export const NotChecked = () => (
  <>
    <Checkbox label="Default" />
    <Checkbox className="storybook-focus" label="Focus" />
    <Checkbox className="storybook-hover" label="Hover" />
    <Checkbox className="storybook-active" label="Active" />
    <Checkbox disabled label="Disabled" />
  </>
);

export const Checked = () => (
  <>
    <Checkbox checked label="Checked" />
    <Checkbox checked className="storybook-focus" label="Focus" />
    <Checkbox checked className="storybook-hover" label="Hover" />
    <Checkbox checked className="storybook-active" label="Active" />
    <Checkbox checked disabled label="Disabled" />
  </>
);

export const Indeterminate = () => (
  <>
    <Checkbox indeterminate label="Indeterminate" />
    <Checkbox className="storybook-focus" indeterminate label="Focus" />
    <Checkbox className="storybook-hover" indeterminate label="Hover" />
    <Checkbox className="storybook-active" indeterminate label="Active" />
    <Checkbox disabled indeterminate label="Disabled" />
  </>
);

export const WithError = () => (
  <Checkbox error="This is an error" label="Label" />
);
