import React from 'react';
import PropTypes from 'prop-types';
import typeStyles from '../../styles/type.css';
import styles from './ProjectHover.css';

const ProjectHover = ({ description, githubBE, githubFE, site }) => (
  <section className={styles.ProjectHover}>
    <p className={typeStyles.body}>{description}</p>
    <div className={githubFE && githubBE ? styles.spaceBetween : styles.centered}>
      {githubFE && <a href={githubFE} target="blank" className={typeStyles.body}>Front-End Repo</a>}
      {githubBE && <a href={githubBE} target="blank" className={typeStyles.body}>Back-End Repo</a>}
    </div>
    {site && <div className={styles.centered}>
      <a href={site} target="blank" className={`${styles.site} ${typeStyles.body}`}>Visit the Site</a>
    </div>}
  </section>
);

ProjectHover.propTypes = {
  description: PropTypes.string.isRequired,
  githubFE: PropTypes.string,
  githubBE: PropTypes.string,
  site: PropTypes.string.isRequired,
};

export default ProjectHover;
