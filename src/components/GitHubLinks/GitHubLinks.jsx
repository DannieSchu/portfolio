import React from 'react';
import PropTypes from 'prop-types';
import styles from './GitHubLinks.css';
import typeStyles from '../../styles/type.css';

const GitHubLinks = ({ githubFE, githubBE }) => (
  <div className={githubFE && githubBE ? styles.spaceBetween : styles.centered}>
    {githubFE && <a href={githubFE} target="blank" className={`${styles.link} ${typeStyles.body}`}>Front-End Repo</a>}
    {githubBE && <a href={githubBE} target="blank" className={`${styles.link} ${typeStyles.body}`}>Back-End Repo</a>}
  </div>
);

GitHubLinks.propTypes = {
  githubBE: PropTypes.string,
  githubFE: PropTypes.string
};

export default GitHubLinks;
