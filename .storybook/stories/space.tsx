import React from 'react';

import { Text } from '../../src';

export default {
  title: 'Design/Space',
};

const Space: React.FC<{ value: string }> = ({ value }) => (
  <tr>
    <th scope="row" style={{ padding: 'var(--space-100)' }}>
      <Text variant="caption">{`space-${value}`}</Text>
    </th>
    <td style={{ padding: 'var(--space-100)' }}>
      <div
        style={{
          background: 'var(--theme-color-primary-background)',
          height: `var(--space-${value})`,
          width: `var(--space-${value})`,
        }}
      />
    </td>
  </tr>
);

export const Default = () => (
  <table
    style={{
      borderCollapse: 'collapse',
    }}
  >
    <tbody>
      <Space value="50" />
      <Space value="100" />
      <Space value="200" />
      <Space value="300" />
      <Space value="400" />
    </tbody>
  </table>
);
