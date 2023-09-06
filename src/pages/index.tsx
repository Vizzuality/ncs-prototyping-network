import { type NextPage } from 'next';

// import Hero from 'containers/home/hero';

import Layout from 'layouts';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="mt-44 flex flex-col items-center justify-center">
        <h2 className="text-3xl">Home Page</h2>
      </div>
    </Layout>
  );
};

export default Home;
