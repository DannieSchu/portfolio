import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Project.css';
import typeStyles from '../../styles/type.css';
import ProjectHover from './ProjectHover';

const Project = ({ 
  title, 
  stack, 
  year, 
  description, 
  githubFE, 
  githubBE, 
  site, 
  images 
}) => {
  const [active, setActive] = useState(false);
  const stackList = stack.map(techItem => `${techItem}`).join(' | ');

  return (
    <section className={styles.Project} onMouseOver={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <img src={images[0]} />
      <article>
        <div className={styles.heading}>
          <a href={site} target="blank"><h3 className={typeStyles.subheading}>{title}</h3></a>
          <h3 className={typeStyles.subheading}>{year}</h3>
        </div>
        <h4 className={typeStyles.allCaps}>{stackList}</h4>
        {active && <ProjectHover description={description} githubFE={githubFE} githubBE={githubBE} site={site} />}
      </article>
    </section>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubFE: PropTypes.string,
  githubBE: PropTypes.string,
  site: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Project;
