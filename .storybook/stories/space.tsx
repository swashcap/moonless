import React from 'react';

import { Text } from '../../packages/components/src';
import variables from '../../packages/tokens/dist/js/variables.json';

export default {
  title: 'Design/Space',
};

export const Default = () => (
  <table
    style={{
      borderCollapse: 'collapse',
    }}
  >
    <tbody>
      {Object.keys(variables.size.space).map((name) => {
        const value = variables.size.space[name];

        return (
          <tr key={name}>
            <th scope="row" style={{ padding: '.5rem' }}>
              <Text variant="caption">{`size-space-${name}`}</Text>
            </th>
            <td style={{ padding: '.5rem' }}>
              <div
                style={{
                  background:
                    variables.color.theme.primary.backgroundColor.base,
                  height: value,
                  width: value,
                }}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
