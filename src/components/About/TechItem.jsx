import React from 'react';
import PropTypes from 'prop-types';
import styles from './TechItem.css';
import typeStyle from '../../styles/type.css';

const TechItem = ({ title, definitions }) => {
  const definitionElements = definitions.map((definition, i) => <dd key={i} className={typeStyle.pullOut}>{definition}</dd>);

  return (
    <article className={styles.TechItem}>
      <dt className={`${styles.title} ${typeStyle.pullOut}`}>{title}</dt>
      <div className={styles.definitions}>
        {definitionElements}
      </div>
    </article>
  );
};

TechItem.propTypes = {
  title: PropTypes.string.isRequired,
  definitions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default TechItem;
