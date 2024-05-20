import { Metadata, type NextPage } from 'next';

import HomePage from 'containers/home';

export const metadata: Metadata = {
  title: 'NCS Prototyping Network',
};

const Home: NextPage = () => {
  return <HomePage />;
};

export default Home;
