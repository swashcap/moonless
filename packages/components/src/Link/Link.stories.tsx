import { Link } from './Link';

export default {
  component: Link,
  title: 'Component/Link',
};

export const Default = () => (
  <div>
    <Link>Link</Link>
    <Link className="storybook-focus">focus</Link>
    <Link className="storybook-hover">hover</Link>
    <Link className="storybook-active">active</Link>
  </div>
);
