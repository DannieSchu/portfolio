import React from 'react';
import { contactArr } from '../../data/contactArr';
import ContactMethod from './ContactMethod';
import PageHeading from '../PageHeading/PageHeading';
import LargeButton from '../LargeButton/LargeButton';
import resume from '../../assets/Dannie-Schumaker-Resume.pdf';
import inkBlot from '../../assets/images/splotch4.png';
import styles from './Contact.css';

const Contact = () => {
  const contactElements = contactArr.map(item => <ContactMethod key={item.link} {...item} />);

  return (
    <section name="Contact" className={styles.Contact}>
      <PageHeading content="Contact" />
      <aside className={styles.resume}>
        <LargeButton link={resume}>Resume</LargeButton>
      </aside>
      <section className={styles.contactInfo}>
        <img src={inkBlot} alt="Ink Blot" className={styles.inkBlot} />
        <div className={styles.contactContainer}>
          {contactElements}
        </div>
      </section>
    </section>
  );
};

export default Contact;
