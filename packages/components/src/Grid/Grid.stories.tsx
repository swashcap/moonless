import { Grid } from './Grid';

export default {
  component: Grid,
  title: 'Component/Grid',
};

export const Default = () => (
  <Grid>
    <Grid.Col>1</Grid.Col>
    <Grid.Col>2</Grid.Col>
    <Grid.Col>3</Grid.Col>
  </Grid>
);
