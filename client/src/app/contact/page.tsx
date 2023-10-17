import { Metadata, type NextPage } from 'next';

import ContactPage from 'containers/contact';
import Footer from 'containers/footer';

export const metadata: Metadata = {
  title: 'TNC Prototype Dashboard',
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
