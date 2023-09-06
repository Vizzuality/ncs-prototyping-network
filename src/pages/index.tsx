import { motion } from 'framer-motion';
import { type NextPage } from 'next';

// import Hero from 'containers/home/hero';

import Layout from 'layouts';

const Home: NextPage = () => {
  return (
    <Layout>
      <motion.div
        className="flex flex-col justify-between"
        initial={{ y: 300 }}
        animate={{ y: 40 }}
        transition={{
          duration: 1,
        }}
      >
        {/* <Hero /> */}
      </motion.div>
    </Layout>
  );
};

export default Home;
