import { type NextPage } from 'next';

import Layout from 'layouts';

const About: NextPage = () => {
  return (
    <Layout>
      <section className="mt-44 flex flex-col items-center justify-center">
        <h2 className="text-3xl">About Page</h2>
      </section>
    </Layout>
  );
};

export default About;
