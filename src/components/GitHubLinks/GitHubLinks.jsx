import React from 'react';
import PropTypes from 'prop-types';
import styles from './GitHubLinks.css';
import typeStyles from '../../styles/type.css';

const GitHubLinks = ({ githubLinks }) => {
  const linkStyle = (githubLinks.length === 1) ? styles.centered : styles.spaceBetween;

  const linkElements = githubLinks.map(item => (
    <a 
      key={item.link} 
      href={item.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`${styles.link} ${typeStyles.body}`}
    >{item.text}</a>
  ));

  return (
    <div className={linkStyle}>
      {linkElements}
    </div>
  );
};

GitHubLinks.propTypes = {
  githubLinks: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired).isRequired,
};

export default GitHubLinks;
