import { Metadata, type NextPage } from 'next';

import Hero from 'containers/home/hero';

export const metadata: Metadata = {
  title: 'NCS Prototyping Network',
};

const Resources: NextPage = () => {
  return <Hero />;
};

export default Resources;
