import React from 'react';
import { contactArr } from '../../data/contactArr';
import resume from '../../assets/Dannie-Schumaker-Resume.pdf';
import inkBlot from '../../assets/images/splotch4.png';
import styles from './Contact.css';
import typeStyle from '../../styles/type.css';
import ContactMethod from './ContactMethod';

const Contact = () => {
  const contactElements = contactArr.map(item => <ContactMethod key={item.link} {...item} />);

  return (
    <section name="Contact" className={styles.Contact}>
      <h2 className={typeStyle.pageHeading}>Contact</h2>
      <aside className={styles.resume}>
        <a href={resume} target="blank" className={typeStyle.body}>Resume</a>
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
