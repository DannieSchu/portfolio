import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContributorsList.css';
import typeStyles from '../../styles/type.css';

const ContributorsList = ({ contributors }) => {
  const contributorsList = contributors.map((contributor, index) => (
    <span className={typeStyles.body} key={contributor.name}><a href={contributor.link}>{contributor.name}</a>{(index !== contributors.length - 1) && ' | '}</span>));

  return (
    <div className={styles.ContributorsList}>
      <span className={typeStyles.allCaps} style={{ fontSize: '1.1rem' }}>Contributors: </span>{contributorsList}
    </div>
  );
};

ContributorsList.propTypes = {
  contributors: PropTypes.arrayOf(PropTypes.shape.isRequired).isRequired
};

export default ContributorsList;