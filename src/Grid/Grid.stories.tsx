import React from 'react';

import { Grid } from './Grid';

export default {
  component: Grid,
  title: 'Grid',
};

export const Default = () => (
  <Grid>
    <Grid.Col>1</Grid.Col>
    <Grid.Col>2</Grid.Col>
    <Grid.Col>3</Grid.Col>
  </Grid>
);
