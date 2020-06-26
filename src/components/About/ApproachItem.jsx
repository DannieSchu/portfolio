import React from 'react';
import PropTypes from 'prop-types';
import styles from './Approach.css';
import typeStyle from '../../styles/type.css';

const ApproachItem = ({ name, image, heading, paragraph }) => {
  return (
    <article className={`${styles.element} ${styles[name]}`}>
      <img src={image} alt="Ink Blot" />
      <div
        className={styles.content}
        style={
          (name === 'design') ?
            { marginLeft: '-1rem', marginTop: '2rem' } :
            (name === 'process') ?
              { marginTop: '-2rem' } :
              { marginLeft: null }
        }>
        <h3 className={typeStyle.subheading}>{heading}</h3>
        <div className={`${styles.details} ${typeStyle.body}`}>
          {paragraph.map((text, index) => (
            <p key={index}>
              {text.link ? <><a href={text.link} target="blank">{text.linkText}</a>{text.body}</> : text.body}</p>
          ))}
        </div>
      </div>
    </article>
  );
};

ApproachItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.arrayOf(PropTypes.shape.isRequired).isRequired
};

export default ApproachItem;
