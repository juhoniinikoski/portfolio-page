import * as React from 'react';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';
import { textContent } from '../content/textContent';

const Contact = (): JSX.Element => {

  return (
    <Layout>
      <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
        <section style={{maxWidth: 650}}>
          <h1>{textContent.contactTitle}</h1>
          <p>{textContent.contactDescription}
            <a
              href='https://www.linkedin.com/in/juhoniinikoski/'
              target="_blank"
              rel="noreferrer noopener"
            >
              <u>LinkedIn</u>
            </a>.
          </p>
          <ContactForm />
        </section>
      </div>
    </Layout>
  )
};

export default Contact;
