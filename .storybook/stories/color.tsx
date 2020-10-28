import React from 'react';
import getContrast from 'get-contrast';

import { Text } from '../../packages/components/src/';

export default {
  title: 'Design/Colors',
};

const Color = ({ name, value }: { name: string; value: number }) => {
  const background = getComputedStyle(
    document.documentElement
  ).getPropertyValue(`--color-${name}-${value}`);

  return (
    <div
      style={{
        alignItems: 'center',
        background,
        display: 'flex',
        flexDirection: 'column',
        height: 100,
        justifyContent: 'center',
        width: 100,
      }}
    >
      <Text style={{ color: '#000' }} variant="caption">
        B: {Math.round(getContrast.ratio(background, '#000') * 100) / 100}
      </Text>
      <Text style={{ color: '#fff' }} variant="caption">
        W: {Math.round(getContrast.ratio(background, '#fff') * 100) / 100}
      </Text>
    </div>
  );
};

const ColorSection = ({ name }: { name: string }) => (
  <>
    <Text>{name}</Text>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {(name === 'gray'
        ? [100, 200, 300, 400, 500, 600, 700]
        : [100, 200, 300, 400, 500]
      ).map((value) => (
        <Color key={value} name={name} value={value} />
      ))}
    </div>
  </>
);

export const Default = () => (
  <>
    <ColorSection name="blue" />
    <ColorSection name="gray" />
    <ColorSection name="green" />
    <ColorSection name="orange" />
    <ColorSection name="purple" />
    <ColorSection name="red" />
    <ColorSection name="yellow" />
  </>
);
