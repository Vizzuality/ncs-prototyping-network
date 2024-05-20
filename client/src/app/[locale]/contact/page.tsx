import { Metadata, type NextPage } from 'next';

import ContactPage from 'containers/contact';
import Footer from 'containers/footer';

export const metadata: Metadata = {
  title: 'NCS Prototyping Network',
};

const Contact: NextPage = () => {
  return (
    <>
      <ContactPage />
      <Footer />
    </>
  );
};

export default Contact;
