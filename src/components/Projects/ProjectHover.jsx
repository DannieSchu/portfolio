import React from 'react';
import PropTypes from 'prop-types';
import GitHubLinks from '../GitHubLinks/GitHubLinks';
import styles from './ProjectHover.css';
import typeStyles from '../../styles/type.css';

const ProjectHover = ({ description, githubLinks, site }) => (
  <section className={styles.ProjectHover}>
    <p className={typeStyles.body}>{description}</p>
    <GitHubLinks githubLinks={githubLinks} />
    {site && <div className={styles.centered}>
      <a href={site} target="_blank" rel="noopener noreferrer" className={`${styles.site} ${typeStyles.body}`}>Visit the Site</a>
    </div>}
  </section>
);

ProjectHover.propTypes = {
  description: PropTypes.string.isRequired,
  githubLinks: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired).isRequired,
  site: PropTypes.string
};

export default ProjectHover;
