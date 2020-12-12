import React from 'react';
import getContrast from 'get-contrast';

import { Text } from '../../packages/components/src/';
import variables from '../../packages/tokens/dist/js/variables.json';

export default {
  title: 'Design/Colors',
};

const Color = ({ name, value }: { name: string; value: number }) => (
  <div
    style={{
      alignItems: 'center',
      background: value,
      display: 'flex',
      flexDirection: 'column',
      height: 100,
      justifyContent: 'center',
      width: 100,
    }}
    title={name}
  >
    <Text style={{ color: '#000' }} variant="caption">
      B: {Math.round(getContrast.ratio(value, '#000') * 100) / 100}
    </Text>
    <Text style={{ color: '#fff' }} variant="caption">
      W: {Math.round(getContrast.ratio(value, '#fff') * 100) / 100}
    </Text>
  </div>
);

const ColorSection = ({ name, values }: { name: string; values: Record<string, string> }) => (
  <>
    <Text>{name}</Text>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {Object.keys(values).map((key) => (
        <Color key={key} name={key} value={values[key]} />
      ))}
    </div>
  </>
);

export const Default = () => (
  <>
    {Object.keys(variables.color.base).map((name) => {
      const values = variables.color.base[name];

      if (typeof values === "string") {
        return (
          <ColorSection
            key={name}
            name={name}
            values={{
              [name]: values
            }}
          />
        );
      }

      return (
        <ColorSection
          key={name}
          name={name}
          values={values}
        />
      );
    })}
  </>
);
