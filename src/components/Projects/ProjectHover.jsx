import React from 'react';
import PropTypes from 'prop-types';
import GitHubLinks from '../GithubLinks/GitHubLinks';
import styles from './ProjectHover.css';
import typeStyles from '../../styles/type.css';

const ProjectHover = ({ description, githubBE, githubFE, site }) => (
  <section className={styles.ProjectHover}>
    <p className={typeStyles.body}>{description}</p>
    <GitHubLinks githubBE={githubBE} githubFE={githubFE} />
    {site && <div className={styles.centered}>
      <a href={site} target="blank" className={`${styles.site} ${typeStyles.body}`}>Visit the Site</a>
    </div>}
  </section>
);

ProjectHover.propTypes = {
  description: PropTypes.string.isRequired,
  githubFE: PropTypes.string,
  githubBE: PropTypes.string,
  site: PropTypes.string
};

export default ProjectHover;
