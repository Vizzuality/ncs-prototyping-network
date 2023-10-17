import { Metadata, type NextPage } from 'next';

import Hero from 'containers/home/hero';

export const metadata: Metadata = {
  title: 'TNC Prototype Dashboard',
};

const Resources: NextPage = () => {
  return <Hero />;
};

export default Resources;
