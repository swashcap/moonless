import React from 'react';

import { PrimaryButton, SecondaryButton } from './Button';

export default {
  title: 'Component/Button',
};

export const Primary = () => (
  <div>
    <PrimaryButton>Primary</PrimaryButton>
    <PrimaryButton className="storybook-focus">focus</PrimaryButton>
    <PrimaryButton className="storybook-hover">hover</PrimaryButton>
    <PrimaryButton className="storybook-active">active</PrimaryButton>
    <PrimaryButton disabled>disabled</PrimaryButton>
  </div>
);

export const Secondary = () => (
  <div>
    <SecondaryButton>Secondary</SecondaryButton>
    <SecondaryButton className="storybook-focus">focus</SecondaryButton>
    <SecondaryButton className="storybook-hover">hover</SecondaryButton>
    <SecondaryButton className="storybook-active">active</SecondaryButton>
    <SecondaryButton disabled>disabled</SecondaryButton>
  </div>
);

export const OnClick = () => (
  <PrimaryButton onClick={console.log}>OnClick</PrimaryButton>
);

export const AsAnchor = () => (
  <div>
    <SecondaryButton as="a" href="#example">
      Go to example section
    </SecondaryButton>
    <PrimaryButton as="a" href="https://google.com" rel="nofollow">
      The Googs
    </PrimaryButton>
  </div>
);

export const Size = () => (
  <div>
    <PrimaryButton size="small">Small</PrimaryButton>
    <PrimaryButton size="medium">Medium</PrimaryButton>
    <PrimaryButton size="large">Large</PrimaryButton>
  </div>
);
