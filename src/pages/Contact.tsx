import * as React from 'react';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';
import { textContent } from '../content/textContent';

const Contact = (): JSX.Element => {
  return (
    <Layout>
      <section style={{maxWidth: 650, alignSelf: 'center'}}>
        <h1>{textContent.contactTitle}</h1>
        <p>{textContent.contactDescription}</p>
        <ContactForm />
      </section>
    </Layout>
  )
};

export default Contact;
